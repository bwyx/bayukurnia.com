import { css } from '~/styles'

import type { VariantProps } from '@stitches/core'

export type TextProps = VariantProps<typeof text>

const text = css({
  variants: {
    size: {
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      base: { fontSize: '$base' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      '2xl': { fontSize: '$2xl' },
      '3xl': { fontSize: '$3xl' },
      '4xl': { fontSize: '$4xl' },
      '5xl': { fontSize: '$5xl' },
      '6xl': { fontSize: '$6xl' }
    },
    family: {
      sans: { fontFamily: '$sans' },
      serif: { fontFamily: '$serif' },
      mono: { fontFamily: '$mono' }
    },
    weight: {
      thin: { fontWeight: '$thin' },
      extralight: { fontWeight: '$extralight' },
      light: { fontWeight: '$light' },
      normal: { fontWeight: '$normal' },
      medium: { fontWeight: '$medium' },
      semibold: { fontWeight: '$semibold' },
      bold: { fontWeight: '$bold' },
      extrabold: { fontWeight: '$extrabold' },
      black: { fontWeight: '$black' }
    },
    leading: {
      none: { lineHeight: '$none' },
      tight: { lineHeight: '$tight' },
      snug: { lineHeight: '$snug' },
      normal: { lineHeight: '$normal' },
      relaxed: { lineHeight: '$relaxed' },
      loose: { lineHeight: '$loose' }
    },
    tracking: {
      tighter: { letterSpacing: '$tighter' },
      tight: { letterSpacing: '$tight' },
      normal: { letterSpacing: '$normal' },
      wide: { letterSpacing: '$wide' },
      wider: { letterSpacing: '$wider' },
      widest: { letterSpacing: '$widest' }
    },
    ellipsis: {
      true: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
      }
    }
  }
})

export default text
