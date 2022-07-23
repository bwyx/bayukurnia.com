import React, { useState, useEffect, useCallback, useRef } from 'react'
import { NextSeo } from 'next-seo'
import { formatDistanceToNowStrict, isSameDay } from 'date-fns'
import { useMqtt } from '~/hooks'

import { attachMainLayout } from '~/layouts/Main.layout'
import {
  ChatBubble,
  ChatBubblePlaceholder,
  ChatInputForm,
  RecentlyMessageCounter
} from '~/components/chat'
import {
  defaultColor,
  availableColors
} from '~/components/chat/ChatInputForm/ChatInputForm'
import { MessageIcon } from '~/components/icons'

import config from '~/config'

import { Page } from '~/types/page.type'
import { Message, NewMessage, DatedMessages } from '~/types/chat.type'

import styles from '~/styles/pages/guestchat.css'

const lessThanOneHourAgo = (date: number) => {
  const HOUR = 1000 * 60 * 60
  const anHourAgo = Date.now() - HOUR

  return date > anHourAgo
}

const GuestChat: Page = () => {
  const main = useRef<HTMLDivElement>(null)
  const { host, port, path, username, password } = config.chat
  const { client, status, connect } = useMqtt('wss://' + host, {
    port,
    path,
    username,
    password
  })
  const [messages, setMessages] = useState<Message[]>([])
  const [messagesLoaded, setMessagesLoaded] = useState<boolean>(false)
  const [shouldGreet, setShouldGreet] = useState<boolean>(true)

  const datedMessages = messages.reduce((acc: DatedMessages, message) => {
    const date = new Date(message.time).setHours(0, 0, 0, 0)
    const isRecently = lessThanOneHourAgo(message.time)
    const existingDate = acc.find((acc) => isSameDay(acc.date, message.time))

    if (isRecently) {
      if (existingDate) {
        existingDate.recentlyMessages
          ? existingDate.recentlyMessages.push(message)
          : (existingDate.recentlyMessages = [message])
      } else {
        acc.push({ date, messages: [], recentlyMessages: [message] })
      }

      return acc
    }

    if (existingDate) {
      existingDate.messages.push(message)
    } else {
      acc.push({ date, messages: [message] })
    }

    return acc
  }, [])

  const handleOutgoingMessage = (newMessage: NewMessage) => {
    client?.publish('chat/guest', JSON.stringify(newMessage))
    fetch('https://chat.bayukurnia.com/history', {
      mode: 'no-cors',
      method: 'POST',
      body: JSON.stringify(newMessage)
    })
  }

  const handleIncomingMessage = useCallback(
    (topic: string, message: string) => {
      let host = false
      let { color, text, time = Date.now() } = JSON.parse(message)

      if (topic === 'chat/host') host = true
      if (!availableColors.includes(color)) color = defaultColor

      setMessages((messages) => [{ text, color, time, host }, ...messages])
    },
    []
  )

  const greet = useCallback((text) => {
    setMessages((messages) => [
      { color: 'green', text, time: Date.now(), host: true },
      ...messages
    ])
  }, [])

  // Greet the user when they connect
  useEffect(() => {
    if (client && shouldGreet) {
      client.on('connect', () => {
        if (shouldGreet) {
          setTimeout(() => greet('Hi! 👋 feel free to ask me anything.'), 500)
          setTimeout(() => {
            greet(
              'Want me to work on a project? 💻 \n email me at hi@bayukurnia.com'
            )
          }, 1500)
          setShouldGreet(false)
        }
      })
    }
  }, [client, greet, shouldGreet])

  // Subscribe to chat messages
  useEffect(() => {
    if (client) {
      client.subscribe('chat/host')
      client.subscribe('chat/guest')
      client.on('message', handleIncomingMessage)
    }
  }, [client, handleIncomingMessage])

  // Fetch previous messages
  useEffect(() => {
    const fetchOldMessages = async () => {
      const response = await fetch('https://chat.bayukurnia.com/history')
      const messages = await response.json()
      setMessages(messages)
      setMessagesLoaded(true)
    }
    fetchOldMessages()
  }, [])

  return (
    <main ref={main} className={styles.main}>
      <NextSeo
        title="Guestchat"
        description="Chat in real-time with random visitors, or just leave a message for me ^_^"
        canonical="https://bayukurnia.com/guestchat"
      />
      <header className={styles.stickyHeader}>
        <h1 className={styles.title}>Guest Chat</h1>
        <MessageIcon />
      </header>
      <section className={styles.container}>
        <p className={styles.description}>
          Chat in real-time with random visitors, or just leave a message for me
          ^_^
        </p>
        <p className={styles.info}>
          IP addresses are collected to prevent malicious messages.
        </p>
        <span className={styles.connectStatus({ status })}>{status}</span>
        {messagesLoaded ? (
          <div className={styles.messages}>
            {datedMessages.map(
              ({ date, messages, recentlyMessages }, dateIndex) => {
                const today = new Date()
                return (
                  <React.Fragment key={dateIndex}>
                    {recentlyMessages ? (
                      <>
                        <RecentlyMessageCounter
                          className={styles.messageTime}
                          time={recentlyMessages[0].time}
                        />
                        {recentlyMessages.map((message, i) => (
                          <ChatBubble
                            key={`d${dateIndex}-r${i}`}
                            {...message}
                          />
                        ))}
                      </>
                    ) : null}
                    {messages.length ? (
                      <span className={styles.messageTime}>
                        {isSameDay(date, today)
                          ? 'Today'
                          : formatDistanceToNowStrict(date, {
                              addSuffix: true
                            })}
                      </span>
                    ) : null}
                    {messages.map((message, i) => (
                      <ChatBubble key={`d${dateIndex}-${i}`} {...message} />
                    ))}
                  </React.Fragment>
                )
              }
            )}
          </div>
        ) : (
          <div className={styles.loading}>
            {[...Array(10)].map((_, i) => (
              <ChatBubblePlaceholder
                key={i}
                host={Math.floor(Math.random() * i) % 3 !== 0}
              />
            ))}
          </div>
        )}
      </section>
      <section className={styles.chatInputContainer}>
        <ChatInputForm
          connected={status === 'Connected'}
          onInputFocus={connect}
          onSendMessage={handleOutgoingMessage}
          placeholder={
            status === 'Connected'
              ? 'Type a message...'
              : status === 'Connecting'
              ? 'Connecting...'
              : 'Start typing to connect...'
          }
        />
      </section>
    </main>
  )
}

GuestChat.layout = attachMainLayout({ footer: false })

export default GuestChat
