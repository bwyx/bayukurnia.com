import { useEffect, useState } from 'react'
import SunMoon from '~/components/vectors/SunMoon'
import themes from '~/styles/themes'

type ThemeName = keyof typeof themes

const ThemeToggle = () => {
  const [theme, setTheme] = useState<ThemeName>('dark')
  const themeNames = Object.keys(themes) as ThemeName[]

  const toggle = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  useEffect(() => {
    const classes = document.documentElement.classList
    classes.remove(...themeNames)
    classes.add(themes[theme as ThemeName].className)
  }, [theme, themeNames])

  useEffect(() => {
    for (const themeName in themes) {
      if (Object.prototype.hasOwnProperty.call(themes, themeName)) {
        const scheme = window.matchMedia(`(prefers-color-scheme: ${themeName})`)

        const applyScheme = (scheme: MediaQueryList) => {
          if (scheme.matches) setTheme(themeName as ThemeName)
        }

        applyScheme(scheme)
        scheme.addEventListener('change', () => applyScheme(scheme))
      }
    }
  }, [])

  return (
    <button
      className="theme-toggle"
      id="theme-toggle"
      title="Toggles light & dark"
      aria-label="auto"
      aria-live="polite"
      onClick={toggle}
    >
      <SunMoon />
    </button>
  )
}

export default ThemeToggle
