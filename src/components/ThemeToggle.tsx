import { useEffect } from 'react'
import useTheme from '~/hooks/useTheme'
import SunMoon from '~/components/vectors/SunMoon'

import themes, { allThemeClass, ThemeName } from '~/styles/themes'

const ThemeToggle = () => {
  const { theme, cycleTheme } = useTheme()

  const applyTheme = (theme: ThemeName) => {
    const htmlClass = document.documentElement.classList

    htmlClass.remove(...allThemeClass)
    htmlClass.add(themes[theme].className)
  }

  useEffect(() => applyTheme(theme), [theme])

  useEffect(() => {
    // listen to all available scheme changes
    for (const theme in themes) {
      if (Object.prototype.hasOwnProperty.call(themes, theme)) {
        const scheme = window.matchMedia(`(prefers-color-scheme: ${theme})`)

        scheme.addEventListener('change', () => {
          if (scheme.matches) applyTheme(theme as ThemeName)
        })
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
      onClick={cycleTheme}
    >
      <SunMoon />
    </button>
  )
}

export default ThemeToggle
