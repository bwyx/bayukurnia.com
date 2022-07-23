import { useState } from 'react'
import { useLocalStorage } from '~/hooks'

import { VisuallyHidden } from '~/components'
import { SendIcon } from '~/components/icons'

import type { NewMessage } from '~/types/chat.type'

import { stack } from '~/styles/primitives'
import styles from './ChatInputForm.css'

export const defaultColor: NewMessage['color'] = 'red'
export const availableColors: NewMessage['color'][] = [
  'magenta',
  'blue',
  'cyan',
  'green',
  'yellow',
  'brown',
  'red'
]

interface Props {
  connected: boolean
  placeholder: string
  onSendMessage: (message: NewMessage) => void
  onInputFocus: () => void
}

const ChatInputForm = ({
  connected,
  placeholder = 'Type a message...',
  onSendMessage,
  onInputFocus
}: Props) => {
  const [message, setMessage] = useState('')
  const [canSubmit, setCanSubmit] = useState(true)
  const [messageColor, setMessageColor] = useLocalStorage<NewMessage['color']>(
    'message-color',
    defaultColor
  )

  const preventSubmit = !message || !connected || !canSubmit

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (preventSubmit) return
    onSendMessage({ text: message, color: messageColor })
    setMessage('')
    setCanSubmit(false)
    setTimeout(() => setCanSubmit(true), 2000)
  }

  return (
    <form
      className={styles.form({ color: messageColor })}
      onSubmit={handleSubmit}
    >
      <div className={stack({ dir: 'col', grow: true })}>
        <input
          onFocus={onInputFocus}
          className={styles.input}
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={placeholder}
        />
        <div className={styles.colorButtons}>
          {availableColors.map((color, i) => (
            <button
              type="button"
              className={styles.colorButton({ color })}
              key={i}
              onClick={() => setMessageColor(color)}
            >
              <VisuallyHidden>Change message color to {color}</VisuallyHidden>
            </button>
          ))}
        </div>
      </div>
      <button className={styles.button} type="submit" disabled={preventSubmit}>
        {canSubmit ? (
          <SendIcon />
        ) : (
          <div className={styles.loading}>
            <span className={styles.loadingDot} />
            <span className={styles.loadingDot} />
            <span className={styles.loadingDot} />
            <span className={styles.loadingDot} />
          </div>
        )}
        <VisuallyHidden>Submit Message</VisuallyHidden>
      </button>
    </form>
  )
}

export default ChatInputForm
