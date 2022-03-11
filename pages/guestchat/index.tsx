import { useState, useEffect, useCallback, useRef } from 'react'
import { NextSeo } from 'next-seo'
import mqtt, { MqttClient } from 'mqtt'

import { attachMainLayout, MainWrapper } from '~/layouts/Main.layout'
import { ChatBubble, ChatInputForm } from '~/components/chat'

import { container, stack } from '~/styles/primitives'

import config from '~/config'

import { Page } from '~/types/page.type'
import { Message, NewMessage } from '~/types/chat.type'

const About: Page = () => {
  const x = useRef<HTMLDivElement>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [client, setClient] = useState<MqttClient>()
  const [status, setStatus] = useState<
    | 'Connecting'
    | 'Reconnecting'
    | 'Connected'
    | 'Disconnecting'
    | 'Disconnected'
  >('Connecting')

  const connect = useCallback(() => {
    const { host, username, password } = config.chat
    setStatus('Connecting')
    setClient(mqtt.connect('wss://' + host, { username, password }))
  }, [])

  const publish = (newMessage: NewMessage) => {
    if (!client) return

    client.publish('chat/guest', JSON.stringify(newMessage))
  }

  const subscribe = useCallback(() => {
    if (!client) return

    client.subscribe('chat/guest')
    client.subscribe('chat/host')
  }, [client])

  const handleOutgoingMessage = (newMessage: NewMessage) => {
    publish(newMessage)
    fetch(`https://${config.chat.host}/history`, {
      mode: 'no-cors',
      method: 'POST',
      body: JSON.stringify(newMessage)
    })
  }

  const handleIncomingMessage = (topic: string, message: string) => {
    let host = false
    let { color, text, time = Date.now() } = JSON.parse(message)

    if (topic === 'chat/host') {
      host = true
    }

    setMessages((messages) => [...messages, { text, color, time, host }])
    x.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }

  useEffect(() => {
    if (!client) return connect()

    console.log(`Connected to ${config.chat.host}`)

    client.on('connect', () => {
      setStatus('Connected')
      subscribe()
    })
    client.on('error', (err) => {
      console.error('Connection error: ', err)
      client.end()
    })
    client.on('reconnect', () => {
      setStatus('Reconnecting')
    })

    client.on('message', handleIncomingMessage)
  }, [client, connect, subscribe])

  useEffect(() => {
    const fetchOldMessages = async () => {
      const response = await fetch(`https://${config.chat.host}/history`)
      const messages = await response.json()
      setMessages(messages)
    }
    fetchOldMessages()
  }, [])

  return (
    <>
      <NextSeo title="Guestchat" />
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
      <div ref={x}></div>
    </>
  )
}

About.layout = attachMainLayout

export default About
