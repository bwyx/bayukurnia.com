import { createVar, style, styleVariants } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { box } from '~/styles/sprinkles'
import { radii, space, zIndices } from '~/styles/variables.css'

export const $ = {
  posX: createVar('posX'),
  posY: createVar('posY')
}

const styles = {
  cursor: recipe({
    base: [
      {
        color: 'white',
        maxWidth: '16rem',
        transform: `translate(var(--x),var(--y))`,
        pointerEvents: 'none',
        top: -2,
        left: `calc(50% + ${space[1.5]})`,
        borderRadius: `0 ${radii['2xl']} ${radii['2xl']} ${radii['2xl']}`,
        zIndex: zIndices[50],
        transition: 'width 0.3s, padding 0.3s, line-height 0.3s'
      },
      box({
        position: 'absolute'
      })
    ],
    variants: {
      smooth: {
        true: {
          transition: '.3s'
        }
      },
      typing: {
        false: {
          caretColor: 'transparent',
          lineHeight: 0,
          padding: space[2]
        },
        true: {
          caretColor: 'white',
          lineHeight: 1.3,
          padding: `${space[2]} ${space[4]}`
        }
      },
      color: {
        brown: {
          background: '#a35e37'
        },
        red: {
          background: '#c14a4a'
        },
        green: {
          background: '#6c782e'
        },
        yellow: {
          background: '#b47109'
        },
        blue: {
          background: '#45707a'
        },
        magenta: {
          background: '#945e80'
        },
        cyan: {
          background: '#4c7a5d'
        },
        gray: {
          background: '#888888'
        }
      }
    },
    defaultVariants: {
      typing: false
    }
  }),
  message: style([
    {
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-all',
      ':focus': {
        outline: 'none'
      }
    }
  ])
}

export default styles
