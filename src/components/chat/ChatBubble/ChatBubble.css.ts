import { keyframes } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { box, text } from '~/styles/sprinkles'
import { radii, rgb, space } from '~/styles/variables.css'

import { $ as chatVars } from '~/styles/pages/guestchat.css'

const shimmer = keyframes({
  from: { transform: 'translateX(-100%)' },
  to: { transform: 'translateX(100%)' }
})

const styles = {
  bubble: recipe({
    base: [
      {
        margin: `${space[2]} 0 0 auto`,
        padding: `${space[2]} ${space[4]}`,
        maxWidth: '80%',
        borderRadius: `${radii['2xl']} 0 ${radii['2xl']} ${radii['2xl']}`,
        overflowWrap: 'break-word',
        whiteSpace: 'pre-line',
        color: 'white'
      },
      text({
        fontWeight: 'light',
        lineHeight: 'snug',
        fontSize: {
          initial: 'sm',
          sm: 'base'
        }
      })
    ],
    variants: {
      placeholder: {
        true: [
          {
            color: `rgb(${rgb.fg3} / 0.25)`,
            backgroundColor: `rgb(${rgb.fg3} / 0.1)`,
            ':before': {
              content: '',
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(90deg, transparent 0%, rgb(${rgb.bg} / 0.35) 35%, rgb(${rgb.bg} / 0.35) 65%, transparent 100%)`,
              animation: `${shimmer} 1s infinite`
            }
          },
          box({ position: 'relative', overflow: 'hidden' })
        ]
      },
      host: {
        true: {
          margin: `${space[2]} auto 0 0`,
          borderRadius: `0 ${radii['2xl']} ${radii['2xl']} ${radii['2xl']}`
        }
      },
      color: {
        brown: { backgroundColor: chatVars.brown },
        red: { backgroundColor: chatVars.red },
        green: { backgroundColor: chatVars.green },
        yellow: { backgroundColor: chatVars.yellow },
        blue: { backgroundColor: chatVars.blue },
        magenta: { backgroundColor: chatVars.magenta },
        cyan: { backgroundColor: chatVars.cyan }
      }
    }
  })
}

export default styles
