import { useState, useEffect, useCallback, useRef } from 'react'
import { NextSeo } from 'next-seo'
import useMqtt from '~/hooks/useMqtt'

import { attachMainLayout, MainWrapper } from '~/layouts/Main.layout'
import { ChatBubble, ChatInputForm } from '~/components/chat'

import { container, stack, text } from '~/styles/primitives'

import config from '~/config'

import { Page } from '~/types/page.type'
import { Message, NewMessage } from '~/types/chat.type'

const GuestChat: Page = () => {
  const anchor = useRef<HTMLDivElement>(null)
  const { host, username, password } = config.chat
  const { client, status } = useMqtt('wss://' + host, {
    username,
    password
  })
  const [messages, setMessages] = useState<Message[]>([])

  const focusToLastMessage = () => {
    anchor.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }

  const handleOutgoingMessage = (newMessage: NewMessage) => {
    client?.publish('chat/guest', JSON.stringify(newMessage))
    fetch(`https://${config.chat.host}/history`, {
      mode: 'no-cors',
      method: 'POST',
      body: JSON.stringify(newMessage)
    })
  }

  const handleIncomingMessage = useCallback(
    (topic: string, message: string) => {
      let host = false
      let { color, text, time = Date.now() } = JSON.parse(message)

      if (topic === 'chat/host') {
        host = true
      }

      setMessages((messages) => [...messages, { text, color, time, host }])
      focusToLastMessage()
    },
    []
  )

  useEffect(() => {
    if (client) {
      client.subscribe('chat/host')
      client.subscribe('chat/guest')
      client.on('message', handleIncomingMessage)
    }
  }, [client, handleIncomingMessage])

  useEffect(() => {
    const fetchOldMessages = async () => {
      const response = await fetch(`https://${config.chat.host}/history`)
      const messages = await response.json()
      setMessages(messages)
      focusToLastMessage()
    }
    fetchOldMessages()
  }, [])

  return (
    <>
      <NextSeo title="Guestchat" />
      <div
        className={container({
          size: 'small',
          css: {
            pointerEvents: 'none',
            position: 'sticky',
            zIndex: 9999,
            top: 0
          }
        })}
      >
        <div
          className={stack({
            y: 'center',
            x: 'center',
            css: {
              height: 50,
              '@sm': { height: 60 }
            }
          })}
        >
          <h1
            className={text({
              weight: 'bold',
              css: { mr: '$3' }
            })}
          >
            Guestchat
          </h1>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M10.02 0C4.21 0 0 4.74 0 10C0 11.68 0.49 13.41 1.35 14.99C1.51 15.25 1.53 15.58 1.42 15.89L0.75 18.13C0.6 18.67 1.06 19.07 1.57 18.91L3.59 18.31C4.14 18.13 4.57 18.36 5.081 18.67C6.541 19.53 8.36 19.97 10 19.97C14.96 19.97 20 16.14 20 9.97C20 4.65 15.7 0 10.02 0Z"
              fill="rgb(var(--rgb-brand))"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.98049 11.2901C9.27049 11.2801 8.70049 10.7101 8.70049 10.0001C8.70049 9.30011 9.28049 8.72011 9.98049 8.73011C10.6905 8.73011 11.2605 9.30011 11.2605 10.0101C11.2605 10.7101 10.6905 11.2901 9.98049 11.2901ZM5.37009 11.2901C4.67009 11.2901 4.09009 10.7101 4.09009 10.0101C4.09009 9.30011 4.66009 8.73011 5.37009 8.73011C6.08009 8.73011 6.65009 9.30011 6.65009 10.0101C6.65009 10.7101 6.08009 11.2801 5.37009 11.2901ZM13.3103 10.0101C13.3103 10.7101 13.8803 11.2901 14.5903 11.2901C15.3003 11.2901 15.8703 10.7101 15.8703 10.0101C15.8703 9.30011 15.3003 8.73011 14.5903 8.73011C13.8803 8.73011 13.3103 9.30011 13.3103 10.0101Z"
              fill="rgb(var(--rgb-brand))"
            />
          </svg>
        </div>
      </div>
      <MainWrapper>
        <div
          className={`${container({ size: 'small' })} ${stack({
            y: 'bottom',
            grow: true
          })}`}
          style={{
            minHeight: 'calc(100vh - 250px)'
          }}
        >
          <div className={stack({ dir: 'col', y: 'bottom', grow: true })}>
            {messages.map((message, i) => (
              <ChatBubble key={i} {...message} />
            ))}
          </div>
        </div>
      </MainWrapper>
      <div
        className={container({
          size: 'small',
          css: {
            py: '$4',
            position: 'sticky',
            bottom: 0
          }
        })}
      >
        <ChatInputForm onSendMessage={handleOutgoingMessage} />
      </div>
      <div ref={anchor}></div>
    </>
  )
}

GuestChat.layout = attachMainLayout

export default GuestChat
