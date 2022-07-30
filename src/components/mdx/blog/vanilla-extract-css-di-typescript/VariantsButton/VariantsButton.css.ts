import {
  createVar,
  fallbackVar,
  style,
  styleVariants,
  keyframes
} from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { box, text } from '~/styles/sprinkles'
import { rgb, space } from '~/styles/variables.css'
import { colors } from './colors.css'

import type { RecipeVariants } from '@vanilla-extract/recipes'
export type ButtonVariants = RecipeVariants<typeof button>

const paddings = {
  small: `${space[1]} ${space[2]}`,
  normal: `${space[2]} ${space[4]}`,
  large: `${space[3]} ${space[6]}`
}

export const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' }
})

export const spin = style({
  animation: `${rotate} 0.5s linear infinite`
})

// Button Variables
const $ = {
  color: createVar('textColor'),
  backgroundColor: createVar('backgroundColor'),
  backgroundHoverColor: createVar('backgroundHoverColor'),
  backgroundActiveColor: createVar('backgroundActiveColor'),
  borderColor: createVar('borderColor'),
  borderHoverColor: createVar('borderHoverColor'),
  ringColor: createVar('ringColor')
}

export const button = recipe({
  base: [
    {
      color: $.color,
      backgroundColor: $.backgroundColor,
      borderColor: fallbackVar($.borderColor, 'transparent'),
      ':focus': { outline: 'none' },
      ':hover': {
        backgroundColor: fallbackVar($.backgroundHoverColor, $.backgroundColor),
        borderColor: fallbackVar(
          $.borderHoverColor,
          $.borderColor,
          'transparent'
        )
      },
      ':active': {
        backgroundColor: fallbackVar(
          $.backgroundActiveColor,
          $.backgroundHoverColor,
          $.backgroundColor
        )
      },
      selectors: {
        '&:active:not([aria-disabled=true])': {
          transform: 'scale(0.97)'
        }
      }
    },
    text({
      textAlign: 'center',
      fontWeight: 'medium',
      userSelect: 'none'
    }),
    box({
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      display: 'inline-flex'
    })
  ],
  variants: {
    variant: {
      contained: {
        ':focus-visible': {
          boxShadow: `0 0 0 2px rgb(${rgb.bg}), 0 0 0 4px ${$.ringColor}`
        }
      },
      outlined: {
        ':focus-visible': { boxShadow: `0 0 0 4px ${$.ringColor}` }
      },
      text: {
        ':focus-visible': {
          boxShadow: `0 0 0 2px rgb(${rgb.bg}), 0 0 0 4px ${$.ringColor}`
        }
      }
    },
    size: {
      small: [{ padding: paddings.small }, text({ fontSize: 'xs' })],
      normal: [{ padding: paddings.normal }, text({ fontSize: 'sm' })],
      large: [{ padding: paddings.large }]
    },
    rounded: {
      true: box({ borderRadius: 'full' }),
      xs: box({ borderRadius: 'xs' }),
      sm: box({ borderRadius: 'sm' }),
      md: box({ borderRadius: 'md' }),
      lg: box({ borderRadius: 'lg' }),
      xl: box({ borderRadius: 'xl' }),
      '2xl': box({ borderRadius: '2xl' }),
      '3xl': box({ borderRadius: '3xl' })
    },
    disabled: {
      true: { cursor: 'default', opacity: 0.75 }
    },
    color: {
      pink: {},
      gray: {}
    }
  },
  compoundVariants: [
    // Contained
    {
      variants: { variant: 'contained', color: 'pink' },
      style: {
        vars: {
          [$.color]: 'white',
          [$.backgroundColor]: colors.pink9,
          [$.backgroundHoverColor]: colors.pink10,
          [$.backgroundActiveColor]: colors.pink11,
          [$.ringColor]: colors.pinkA6
        }
      }
    },
    {
      variants: { variant: 'contained', color: 'gray' },
      style: {
        vars: {
          [$.color]: 'white',
          [$.backgroundColor]: colors.olive9,
          [$.backgroundHoverColor]: colors.olive10,
          [$.backgroundActiveColor]: colors.olive11,
          [$.ringColor]: colors.oliveA6
        }
      }
    },

    // Outlined
    {
      variants: { variant: 'outlined', color: 'pink' },
      style: {
        vars: {
          [$.color]: colors.pink11,
          [$.backgroundColor]: colors.pinkA1,
          [$.backgroundActiveColor]: colors.pinkA2,
          [$.borderColor]: colors.pink7,
          [$.borderHoverColor]: colors.pink8,
          [$.ringColor]: colors.pinkA4
        }
      }
    },
    {
      variants: { variant: 'outlined', color: 'gray' },
      style: {
        vars: {
          [$.color]: colors.olive11,
          [$.backgroundColor]: colors.oliveA1,
          [$.backgroundActiveColor]: colors.oliveA2,
          [$.borderColor]: colors.olive7,
          [$.borderHoverColor]: colors.olive8,
          [$.ringColor]: colors.oliveA4
        }
      }
    },

    // Text
    {
      variants: { variant: 'text', color: 'pink' },
      style: {
        vars: {
          [$.color]: colors.pink11,
          [$.backgroundColor]: colors.pinkA3,
          [$.backgroundHoverColor]: colors.pinkA4,
          [$.backgroundActiveColor]: colors.pinkA5,
          [$.ringColor]: colors.pinkA6
        }
      }
    },
    {
      variants: { variant: 'text', color: 'gray' },
      style: {
        vars: {
          [$.color]: colors.olive11,
          [$.backgroundColor]: colors.oliveA3,
          [$.backgroundHoverColor]: colors.oliveA4,
          [$.backgroundActiveColor]: colors.oliveA5,
          [$.ringColor]: colors.oliveA6
        }
      }
    }
  ],
  defaultVariants: {
    variant: 'text',
    size: 'normal',
    color: 'pink'
  }
})

export const loader = style([spin, box({ position: 'absolute' })])
export const children = styleVariants({
  visible: [box({ visibility: 'visible' })],
  hidden: [box({ visibility: 'hidden' })]
})

const styles = { button, loader, children }
export default styles
