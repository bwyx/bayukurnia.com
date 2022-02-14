import { useState } from 'react'
import config from '~/config'
import { availableTheme, ThemeName } from '~/styles/themes'

const getSavedTheme = (): ThemeName | null => {
  try {
    const savedTheme = window.localStorage.getItem('theme') as ThemeName | null
    return savedTheme && availableTheme.includes(savedTheme) ? savedTheme : null
  } catch (e) {
    // When Chrome in incognito, localStorage cannot be accessed
    console.warn(e)
    return null
  }
}

const saveTheme = (theme: ThemeName) => {
  try {
    window.localStorage.setItem('theme', theme)
  } catch (e) {
    console.log(e)
  }
}

const useTheme = () => {
  const [themeIndex, setThemeIndex] = useState(
    availableTheme.indexOf(getSavedTheme() || config.defaultTheme)
  )
  const theme = availableTheme[themeIndex]

  const cycleTheme = () => {
    const overIndex = themeIndex + 1 >= availableTheme.length

    const nextIndex = overIndex ? 0 : themeIndex + 1
    const nextTheme = availableTheme[nextIndex]

    setThemeIndex(nextIndex)
    saveTheme(nextTheme)
  }

  return { theme, cycleTheme }
}

export default useTheme
