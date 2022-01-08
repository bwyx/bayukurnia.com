import { createTheme } from '~/styles'

export const lightTheme = {
  colors: {
    brand: '121 116 14',
    accent: '181 118 20',
    fg: '51 65 85',
    bg: '250 250 250',
    glass: '$brand',
    black: '#000',
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
}

export const darkTheme = {
  colors: {
    brand: '184 187 38',
    accent: '250 189 47',
    fg: '255 255 255',
    bg: '16 17 14',
    glass: '255 255 255',
    black: '#000',
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
}

const themes = {
  light: createTheme('light', lightTheme),
  dark: createTheme('dark', darkTheme)
}

export default themes
