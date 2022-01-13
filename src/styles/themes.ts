import { createTheme } from '~/styles'

export const lightTheme = {
  rgb: {
    brand: '121 116 14',
    accent: '181 118 20',
    fg: '$text-800',
    bg: '250 250 250',
    glass: '$brand'
  }
}

export const darkTheme = {
  rgb: {
    brand: '184 187 38',
    accent: '250 189 47',
    fg: '$text-100',
    bg: '16 17 14',
    glass: '255 255 255'
  }
}

const themes = {
  light: createTheme('light', lightTheme),
  dark: createTheme('dark', darkTheme)
}

export default themes
