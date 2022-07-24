import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css'

export const media = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)',
  motionSafe: '(prefers-reduced-motion: no-preference)',
  retina: '(-webkit-min-device-pixel-ratio: 2),(min-resolution: 192dpi)'
}

export const globalVars = createGlobalTheme(':root', {
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
  space: {
    px: '1px',
    0: '0px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    11: '2.75rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem'
  },
  fonts: {
    sans: "Inter var, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Noto Color Emoji', 'Segoe UI Symbol'",
    serif: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
    mono: "Iosevka, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
  },
  radii: {
    none: '0',
    xs: '0.125rem',
    sm: '0.25rem',
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
    0: '0',
    1: '1px',
    2: '2px',
    4: '4px',
    8: '8px'
  }
})

export const themeVars = createThemeContract({
  rgb: {
    brand: null,
    accent: null,
    fg1: null,
    fg2: null,
    fg3: null,
    bg: null,
    glass: null,

    black: null,
    gray: null,
    brown: null,
    orange: null,
    yellow: null,
    green: null,
    blue: null,
    purple: null,
    pink: null,
    red: null
  }
})

export const rgb = { ...globalVars.rgb, ...themeVars.rgb }
export const { space, fonts, radii, sizes, zIndices, borderWidths } = globalVars
