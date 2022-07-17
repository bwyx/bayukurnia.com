import { useState } from 'react'
import { useLocalStorage } from '~/hooks'

import { VisuallyHidden } from '~/components'
import { SendIcon } from '~/components/icons'

import { css, keyframes } from '~/styles'
import { stack } from '~/styles/primitives'

import type { NewMessage } from '~/types/chat.type'

const ellipsis1 = keyframes({
  '0%': { transform: 'scale(0)' },
  '100%': { transform: 'scale(1)' }
})

const ellipsis2 = keyframes({
  '0%': { transform: 'translate(0, 0)' },
  '100%': { transform: 'translate(10px, 0)' }
})

const ellipsis3 = keyframes({
  '0%': { transform: 'scale(1)' },
  '100%': { transform: 'scale(0)' }
})

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
    display: 'flex',
    alignItems: 'center',
    height: 36,
    px: '$3',
    mr: '-$3',
    color: '$$messageColor',
    '&:hover': {
      opacity: 0.8
    },
    '&:disabled': {
      pointerEvents: 'none'
    },
    '@sm': { height: 38 }
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
  }),
  loading: css({
    width: 24,
    height: 4,
    display: 'inline-block',
    position: 'relative',
    '& span': {
      position: 'absolute',
      width: '4px',
      height: '4px',
      borderRadius: '50%',
      background: '$$messageColor',
      animationTimingFunction: 'cubic-bezier(0, 1, 1, 0)'
    },
    '& span:nth-child(1)': {
      left: '0px',
      animation: `${ellipsis1} 0.6s infinite`
    },
    '& span:nth-child(2)': {
      left: '0px',
      animation: `${ellipsis2} 0.6s infinite`
    },
    '& span:nth-child(3)': {
      left: '10px',
      animation: `${ellipsis2} 0.6s infinite`
    },
    '& span:nth-child(4)': {
      left: '20px',
      animation: `${ellipsis3} 0.6s infinite`
    }
  })()
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
        <div className={`${stack({ x: 'right' })} ${css({ mt: '$2' })}`}>
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
            <span />
            <span />
            <span />
            <span />
          </div>
        )}
        <VisuallyHidden>Submit Message</VisuallyHidden>
      </button>
    </form>
  )
}

export default ChatInputForm
