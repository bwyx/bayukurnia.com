import { createTheme } from '~/styles'

export const lightTheme = {
  rgb: {
    brand: '121 116 14', // #79740e
    accent: '181 118 20', // #b57614
    fg1: '$rgb$text-800',
    fg2: '$rgb$text-700',
    fg3: '$rgb$text-600',
    bg: '250 250 250', // #fafafa
    glass: '$brand',

    // Colors
    black: '40 40 40', // #282828
    gray: '107 114 128', // #6b7280
    brown: '214 93 14', // #d65d0e
    orange: '254 128 25', // #fe8019
    yellow: '181 118 20', // #b57614
    green: '121 116 14', // #79740e
    blue: '7 102 120', // #076678
    purple: '177 98 134', // #b16286
    pink: '211 134 155', // #d3869b
    red: '157 0 6' // #9d0006
  }
}

export const darkTheme = {
  rgb: {
    brand: '184 187 38', // #b8bb26
    accent: '250 189 47', // #fabd2f
    fg1: '$rgb$text-100',
    fg2: '$rgb$text-300',
    fg3: '$rgb$text-500',
    bg: '16 17 14', // #10110e
    glass: '255 255 255', // #ffffff

    // Colors
    black: '40 40 40', // #282828
    gray: '107 114 128', // #6b7280
    brown: '214 93 14', // #d65d0e
    orange: '254 128 25', // #fe8019
    yellow: '250 189 47', // #fabd2f
    green: '184 187 38', // #b8bb26
    blue: '131 165 152', // #83a598
    purple: '177 98 134', // #b16286
    pink: '211 134 155', // #d3869b
    red: '251 73 52' // #fb4934
  }
}

const themes = {
  light: createTheme('light', lightTheme),
  dark: createTheme('dark', darkTheme)
}

export default themes
