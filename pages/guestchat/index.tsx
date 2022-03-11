import { useState, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import { attachMainLayout, MainWrapper } from '~/layouts/Main.layout'
import { ChatBubble, ChatInputForm } from '~/components/chat'

import { container, stack } from '~/styles/primitives'

import { Page } from '~/types/page.type'
import { Message } from '~/types/chat.type'

const About: Page = () => {
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    const fetchOldMessages = async () => {
      const response = await fetch(
        `https://${process.env.NEXT_PUBLIC_CHAT_HOST}/history`
      )
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
          style={{ minHeight: 'calc(100vh - 150px)' }}
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
            position: 'sticky',
            bottom: '1rem'
          }
        })}
      >
        <ChatInputForm onSendMessage={(message) => console.log({ message })} />
      </div>
    </>
  )
}

About.layout = attachMainLayout

export default About
