import type { ChatBubbleProps } from '~/components/chat/ChatBubble'

export type Message = ChatBubbleProps

export type NewMessage = Omit<ChatBubbleProps, 'time' | 'host'>
