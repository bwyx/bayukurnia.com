import { css } from '~/styles'

import type { VariantProps } from '@stitches/core'

const styles = css({
  margin: '$2 0 0 auto',
  py: '$2',
  px: '$4',
  maxWidth: '80%',
  fontSize: '$sm',
  fontWeight: '$light',
  lineHeight: '$snug',
  borderRadius: '$2xl $2xl 0 $2xl',
  color: 'white',
  '@lg': { fontSize: '$base' },
  variants: {
    host: {
      true: {
        margin: '$2 auto 0 0',
        borderRadius: '$2xl $2xl $2xl 0'
      }
    },
    color: {
      brown: { background: '#654735' },
      red: { background: '#c14a4a' },
      green: { background: '#6c782e' },
      yellow: { background: '#b47109' },
      blue: { background: '#45707a' },
      magenta: { background: '#945e80' },
      cyan: { background: '#4c7a5d' }
    }
  }
})

export interface TextBubbleProps {
  text: string
  color: VariantProps<typeof styles>['color']
  time: number
  host?: boolean
}

const TextBubble = ({ text, time, ...msg }: TextBubbleProps) => {
  return <span className={styles({ ...msg })}>{text}</span>
}

export default TextBubble
