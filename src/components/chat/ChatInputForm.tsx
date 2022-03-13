import { useState } from 'react'

import { SendIcon } from '~/components/icons'

import { css } from '~/styles'
import { stack } from '~/styles/primitives'

import type { NewMessage } from '~/types/chat.type'

const styles = {
  form: css(stack, {
    margin: '0 auto',
    maxWidth: '$lg',
    py: '$4',
    px: '$4',
    xBackground: '$bg',
    border: '1px solid rgb($rgb$bg / 25%)',
    borderRadius: '$2xl',
    '@supports (backdrop-filter: saturate(180%) blur(1rem))': {
      xBackgroundOpacity: 0.6,
      backdropFilter: 'saturate(180%) blur(1rem)'
    },

    $$brown: '#a35e37',
    $$red: '#c14a4a',
    $$green: '#6c782e',
    $$yellow: '#b47109',
    $$blue: '#45707a',
    $$magenta: '#945e80',
    $$cyan: '#4c7a5d',
    variants: {
      color: {
        brown: { $$messageColor: '$$brown' },
        red: { $$messageColor: '$$red' },
        green: { $$messageColor: '$$green' },
        yellow: { $$messageColor: '$$yellow' },
        blue: { $$messageColor: '$$blue' },
        magenta: { $$messageColor: '$$magenta' },
        cyan: { $$messageColor: '$$cyan' }
      }
    }
  }),
  input: css({
    py: '$2',
    px: '$4',
    color: 'white',
    fontSize: '$sm',
    lineHeight: '$snug',
    width: '100%',
    background: '$$messageColor',
    borderRadius: '$2xl',
    '&::placeholder': { color: 'rgb(255 255 255 / 0.25)' },
    '@sm': { fontSize: '$base' }
  })(),
  button: css({
    height: 38,
    px: '$3',
    mr: '-$3',
    color: '$$messageColor',
    '&:hover': {
      opacity: 0.8
    }
  })(),
  colorButton: css({
    ml: '$2',
    width: 20,
    height: 20,
    borderRadius: '$full',
    variants: {
      color: {
        brown: { background: '$$brown' },
        red: { background: '$$red' },
        green: { background: '$$green' },
        yellow: { background: '$$yellow' },
        blue: { background: '$$blue' },
        magenta: { background: '$$magenta' },
        cyan: { background: '$$cyan' }
      }
    }
  })
}

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
  onSendMessage: (message: NewMessage) => void
}

const ChatInputForm = ({ connected, onSendMessage }: Props) => {
  const [message, setMessage] = useState('')
  const [messageColor, setMessageColor] =
    useState<NewMessage['color']>(defaultColor)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!message || !connected) return
    onSendMessage({ text: message, color: messageColor })
    setMessage('')
  }

  return (
    <form
      className={styles.form({ color: messageColor })}
      onSubmit={handleSubmit}
      style={{ pointerEvents: connected ? 'auto' : 'none' }}
    >
      <div className={stack({ dir: 'col', grow: true })}>
        <input
          className={styles.input}
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={connected ? 'Type a message...' : 'Connecting...'}
        />
        <div className={stack({ x: 'right', css: { mt: '$2' } })}>
          {availableColors.map((color, i) => (
            <button
              type="button"
              className={styles.colorButton({ color })}
              key={i}
              onClick={() => setMessageColor(color)}
            ></button>
          ))}
        </div>
      </div>
      <button className={styles.button} type="submit">
        <SendIcon />
      </button>
    </form>
  )
}

export default ChatInputForm
