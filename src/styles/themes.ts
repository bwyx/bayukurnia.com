import { createTheme } from '~/styles'

export const lightTheme = createTheme('light', {
  colors: {
    brand: '121 116 14',
    brandShade: '#98971a',
    accent: '181 118 20',
    accentShade: '215 153 33',
    fg: '#334155',
    bg: '250 250 250',
    bgShade: '#f5f5f5',
    border: '#e0e0e0',
    black: '0 0 0',
    gray: '#6b7280',
    brown: '#78350f',
    orange: '#f97316',
    yellow: '#eab308',
    green: '#22c55e',
    blue: '#3b82f6',
    purple: '#a855f7',
    pink: '#ec4899',
    red: '#ef4444'
  }
})

export const darkTheme = createTheme('dark', {
  colors: {
    brand: '184 187 38',
    brandShade: '#98971a',
    accent: '250 189 47',
    accentShade: '215 153 33',
    fg: '#fff',
    bg: '13 13 13',
    bgShade: '#f5f5f5',
    border: '#e0e0e0',
    black: '0 0 0',
    gray: '#6b7280',
    brown: '#78350f',
    orange: '#f97316',
    yellow: '#eab308',
    green: '#22c55e',
    blue: '#3b82f6',
    purple: '#a855f7',
    pink: '#ec4899',
    red: '#ef4444'
  }
})
