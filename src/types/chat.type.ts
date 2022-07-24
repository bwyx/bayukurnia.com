import type { ChatBubbleProps } from '~/components/chat/ChatBubble/ChatBubble'

export type Message = ChatBubbleProps

export type NewMessage = Omit<ChatBubbleProps, 'time' | 'host'>

export type DatedMessages = {
  date: number
  messages: Message[]
  recentlyMessages?: Message[]
}[]
