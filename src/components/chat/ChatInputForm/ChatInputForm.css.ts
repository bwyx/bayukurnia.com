import { createVar, keyframes, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { calc } from '@vanilla-extract/css-utils'

import { box, text } from '~/styles/sprinkles'
import { media, rgb, sizes, space } from '~/styles/variables.css'

import { $ as chatVars } from '~/styles/pages/guestchat.css'

const $ = {
  formBackgroundOpacity: createVar('formBackgroundOpacity')
}

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

const form = recipe({
  base: [
    {
      margin: '0 auto',
      padding: space[4],
      maxWidth: sizes.lg,
      backgroundColor: `rgb(${rgb.bg} / ${$.formBackgroundOpacity})`,
      border: `1px solid rgb(${rgb.bg} / 0.25)`,
      '@supports': {
        '(backdrop-filter: saturate(180%) blur(1rem))': {
          vars: {
            [$.formBackgroundOpacity]: '0.6'
          },
          backdropFilter: 'saturate(180%) blur(1rem)'
        }
      }
    },
    box({
      display: 'flex',
      borderRadius: '2xl'
    })
  ],
  variants: {
    color: {
      brown: { vars: { [chatVars.messageColor]: chatVars.brown } },
      red: { vars: { [chatVars.messageColor]: chatVars.red } },
      green: { vars: { [chatVars.messageColor]: chatVars.green } },
      yellow: { vars: { [chatVars.messageColor]: chatVars.yellow } },
      blue: { vars: { [chatVars.messageColor]: chatVars.blue } },
      magenta: { vars: { [chatVars.messageColor]: chatVars.magenta } },
      cyan: { vars: { [chatVars.messageColor]: chatVars.cyan } }
    }
  }
})

const colorButton = recipe({
  base: [
    {
      width: 20,
      height: 20,
      marginLeft: space[2]
    },
    box({ borderRadius: 'full' })
  ],
  variants: {
    color: {
      brown: { background: chatVars.brown },
      red: { background: chatVars.red },
      green: { background: chatVars.green },
      yellow: { background: chatVars.yellow },
      blue: { background: chatVars.blue },
      magenta: { background: chatVars.magenta },
      cyan: { background: chatVars.cyan }
    }
  }
})

const styles = {
  form,
  colorButton,
  input: style([
    {
      padding: `${space[2]} ${space[4]}`,
      color: 'white',
      width: '100%',
      background: chatVars.messageColor,
      '::placeholder': { color: 'rgb(255 255 255 / 0.25)' }
    },
    box({ borderRadius: '2xl' }),
    text({
      lineHeight: 'snug',
      fontSize: {
        initial: 'sm',
        sm: 'base'
      }
    })
  ]),
  button: style([
    {
      height: 36,
      paddingLeft: space[3],
      paddingRight: space[3],
      marginRight: calc.multiply(space[3], -1),
      color: chatVars.messageColor,
      ':hover': { opacity: 0.8 },
      ':disabled': { pointerEvents: 'none' },
      '@media': {
        [media.sm]: { height: 38 }
      }
    },
    box({
      display: 'flex',
      alignItems: 'center'
    })
  ]),
  colorButtons: style([
    { marginTop: space[2] },
    box({
      display: 'flex',
      justifyContent: 'flex-end'
    })
  ]),
  loading: style([
    { width: 24, height: 4 },
    box({
      position: 'relative',
      display: 'inline-block'
    })
  ]),
  loadingDot: style([
    {
      width: 4,
      height: 4,
      backgroundColor: chatVars.messageColor,
      animationDuration: '0.6s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'cubic-bezier(0, 1, 1, 0)',
      selectors: {
        '&:nth-child(1)': { left: 0, animationName: ellipsis1 },
        '&:nth-child(2)': { left: 0, animationName: ellipsis2 },
        '&:nth-child(3)': { left: 10, animationName: ellipsis3 },
        '&:nth-child(4)': { left: 20, animationName: ellipsis3 }
      }
    },
    box({ position: 'absolute', borderRadius: 'full' })
  ])
}

export default styles
