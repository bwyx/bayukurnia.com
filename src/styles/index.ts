import { createStitches } from '@stitches/core'
import { darkTheme, lightTheme } from './themes'
import type * as Stitches from '@stitches/core'

export type CSS = Stitches.CSS<typeof config>
type Space = Stitches.ScaleValue<'space'> | `-$${keyof typeof space}` | 'auto'
type RGBS = keyof typeof darkTheme.rgb & keyof typeof lightTheme.rgb
type RGB = `$${RGBS}` | Stitches.ScaleValue<'rgb'>
type Opacity = Stitches.PropertyValue<'opacity'>

export type RGBColor = keyof typeof config.theme.rgb

const space = {
  px: '1px',
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  32: '8rem',
  40: '10rem',
  48: '12rem',
  56: '14rem',
  64: '16rem'
}

export const { css, keyframes, getCssText, globalCss, createTheme, config } =
  createStitches({
    theme: {
      rgb: {
        'text-50': '255 255 255', // #ffffff
        'text-100': '242 243 242', // #f2f3f2
        'text-200': '217 218 216', // #d9dad8
        'text-300': '191 193 189', // #bfc1bd
        'text-400': '166 168 163', // #a6a8a3
        'text-500': '140 144 137', // #8c9089
        'text-600': '112 116 109', // #70746d
        'text-700': '84 87 82', // #545752
        'text-800': '56 58 54', // #383a36
        'text-900': '28 29 27' // #1c1d02
      },
      fonts: {
        sans: "Inter var, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Noto Color Emoji', 'Segoe UI Symbol'",
        serif: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
        mono: "Iosevka, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
      },
      fontSizes: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem'
      },
      fontWeights: {
        thin: 100,
        extralight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900
      },
      lineHeights: {
        none: 1,
        tight: 1.25,
        snug: 1.375,
        normal: 1.5,
        relaxed: 1.625,
        loose: 2
      },
      letterSpacings: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em'
      },
      radii: {
        none: '0',
        sm: '0.125rem',
        default: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px'
      },
      sizes: {
        none: 'none',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        full: '100%',
        screenHeight: '100vh'
      },
      space,
      zIndices: {
        auto: 'auto',
        0: '0',
        10: '10',
        20: '20',
        30: '30',
        40: '40',
        50: '50'
      },
      borderWidths: {
        default: '1px',
        0: '0',
        2: '2px',
        4: '4px',
        8: '8px'
      }
    },
    media: {
      sm: '(min-width: 640px)',
      md: '(min-width: 768px)',
      lg: '(min-width: 1024px)',
      xl: '(min-width: 1280px)',
      '2xl': '(min-width: 1536px)',
      motionOK: '(prefers-reduced-motion: no-preference)'
    },
    utils: {
      xColor: (color: RGB) => ({
        '$$color-opacity': 1,
        color: `rgb($rgb${color} / $$color-opacity)`
      }),
      xColorOpacity: (opacity: Opacity) => ({
        '$$color-opacity': `${opacity} !important`
      }),

      xBackground: (color: RGB) => ({
        '$$bg-opacity': 1,
        backgroundColor: `rgb($rgb${color} / $$bg-opacity)`
      }),
      xBackgroundOpacity: (opacity: Opacity) => ({
        '$$bg-opacity': `${opacity} !important`
      }),

      // Abbreviated margin properties
      mt: (value: Space) => ({
        marginTop: value
      }),
      mr: (value: Space) => ({
        marginRight: value
      }),
      mb: (value: Space) => ({
        marginBottom: value
      }),
      ml: (value: Space) => ({
        marginLeft: value
      }),

      mx: (value: Space) => ({
        marginLeft: value,
        marginRight: value
      }),
      my: (value: Space) => ({
        marginTop: value,
        marginBottom: value
      }),

      // Abbreviated padding properties
      pt: (value: Space) => ({
        paddingTop: value
      }),
      pr: (value: Space) => ({
        paddingRight: value
      }),
      pb: (value: Space) => ({
        paddingBottom: value
      }),
      pl: (value: Space) => ({
        paddingLeft: value
      }),

      px: (value: Space) => ({
        paddingLeft: value,
        paddingRight: value
      }),
      py: (value: Space) => ({
        paddingTop: value,
        paddingBottom: value
      })
    }
  })
