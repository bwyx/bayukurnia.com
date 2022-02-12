import { useEffect, useState } from 'react'
import SunMoon from '~/components/vectors/SunMoon'
import themes from '~/styles/themes'

type ThemeName = keyof typeof themes

const ThemeToggle = () => {
  const [themeIndex, setThemeIndex] = useState<number>(0)
  const themeNames = Object.keys(themes) as ThemeName[]

  const toggle = () =>
    setThemeIndex(themeIndex === themeNames.length - 1 ? 0 : themeIndex + 1)

  useEffect(() => {
    const classes = document.documentElement.classList
    const allClasses = Object.entries(themes).map(([k, v]) => v.className)

    classes.remove(...allClasses)
    classes.add(themes[themeNames[themeIndex]].className)
  }, [themeNames, themeIndex])

  useEffect(() => {
    for (const theme in themes) {
      if (Object.prototype.hasOwnProperty.call(themes, theme)) {
        const scheme = window.matchMedia(`(prefers-color-scheme: ${theme})`)

        const applyScheme = (scheme: MediaQueryList) => {
          if (scheme.matches)
            setThemeIndex(themeNames.indexOf(theme as ThemeName))
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
