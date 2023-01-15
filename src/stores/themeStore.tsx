import { createStore } from 'zustand'

import type { Theme } from '~/types/global.type'

interface ThemeState {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const themeStore = createStore<ThemeState>((set, get) => ({
  theme: global.window?.__theme || 'light',
  setTheme: (theme: Theme) => set({ theme }),
  toggleTheme: () => {
    const { theme } = get()

    global.window.__setPreferredTheme(theme === 'light' ? 'dark' : 'light')
  }
}))

if (global?.window?.__onThemeChange)
  global.window.__onThemeChange = themeStore.getState().setTheme

export default themeStore
