import { useEffect, useState } from 'react'

const useTheme = () => {
  const [theme, setTheme] = useState(global.window?.__theme || 'light')
  const toggleTheme = () => {
    global.window.__setPreferredTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    global.window.__onThemeChange = setTheme
  }, [])

  return { theme, toggleTheme }
}

export default useTheme
