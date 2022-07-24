import { globalStyle, style } from '@vanilla-extract/css'
import { box, text } from '~/styles/sprinkles'
import { media, rgb } from '~/styles/variables.css'

const styles = {
  blockquote: style([
    { color: `rgb(${rgb.fg1})` },
    box({ position: 'relative' }),
    text({
      fontWeight: 'light',
      lineHeight: 'relaxed',
      letterSpacing: 'tight',
      fontSize: {
        initial: 'lg',
        lg: '2xl'
      }
    })
  ]),
  quotation: style([
    {
      opacity: 0.1,
      width: 80,
      height: 80,
      left: -15,
      top: -25,
      '@media': {
        [media.md]: {
          left: -85,
          top: -15
        },
        [media.lg]: { top: 0 }
      }
    },
    box({ position: 'absolute' })
  ])
}

globalStyle(`${styles.blockquote} > cite`, {
  letterSpacing: '0em',
  fontSize: '0.875rem',
  '@media': {
    [media.lg]: {
      fontSize: '1rem'
    }
  }
})

export default styles
