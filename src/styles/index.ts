import { createStitches } from '@stitches/react'

export const { styled, css, getCssText } = createStitches({
  theme: {
    colors: {
      brand: '#b8bb26',
      brandShade: '#9e9e1b',
      brandShadeActive: '#89890e',
      accent: '#ff4081',
      accentShade: '#ff79b0',
      accentShadeActive: '#ffa3d7',
      text: '#334155',
      bg: '#fafafa',
      bgShade: '#f5f5f5',
      border: '#e0e0e0',
      black: '#000000',
      gray: '#6b7280',
      brown: '#78350f',
      orange: '#f97316',
      yellow: '#eab308',
      green: '#22c55e',
      blue: '#3b82f6',
      purple: '#a855f7',
      pink: '#ec4899',
      red: '#ef4444'
    },
    space: {},
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem'
    },
    fonts: {
      sans: "Inter var, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
      serif: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
      mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
      untitled: 'Untitled Sans, apple-system, sans-serif'
    },
    radii: {
      none: '0px',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px'
    }
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
    '2xl': '(min-width: 1536px)'
  },
  utils: {
    m: (n: number) => ({ margin: n }),
    ml: (n: number) => ({ marginLeft: n }),
    mr: (n: number) => ({ marginRight: n }),
    mt: (n: number) => ({ marginTop: n }),
    mb: (n: number) => ({ marginBottom: n }),
    mx: (n: number) => ({ marginLeft: n, marginRight: n }),
    my: (n: number) => ({ marginTop: n, marginBottom: n }),

    p: (n: number) => ({ padding: n }),
    pl: (n: number) => ({ paddingLeft: n }),
    pr: (n: number) => ({ paddingRight: n }),
    pt: (n: number) => ({ paddingTop: n }),
    pb: (n: number) => ({ paddingBottom: n }),
    px: (n: number) => ({ paddingLeft: n, paddingRight: n }),
    py: (n: number) => ({ paddingTop: n, paddingBottom: n }),

    size: (n: number) => ({ width: n, height: n })
  }
})
