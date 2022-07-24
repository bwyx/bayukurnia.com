declare global {
  interface Window {
    __theme?: string
    __onThemeChange?: (theme: string) => void
    __setPreferredTheme: (theme: string) => void
  }
}

export {}
