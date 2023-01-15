export type Theme = 'dark' | 'light'

declare global {
  interface Window {
    __theme?: Theme
    __onThemeChange?: (theme: Theme) => void
    __setPreferredTheme: (theme: Theme) => void
  }
}

export {}
