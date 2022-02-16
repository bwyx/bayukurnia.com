import { useState } from 'react'
import config from '~/config'
import { availableTheme, ThemeName } from '~/styles/themes'

const setLocalStorage = (key: string, value: string) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(key, value)
  }
}

const getLocalStorage = <T extends string | null>(key: string) => {
  if (typeof window !== 'undefined') {
    return <T>window.localStorage.getItem(key)
  }

  return null
}

const getSavedTheme = (): ThemeName | null => {
  try {
    const savedTheme = getLocalStorage<ThemeName>('theme')
    const isValid = savedTheme && availableTheme.includes(savedTheme)

    return isValid ? savedTheme : null
  } catch (e) {
    // When Chrome in incognito, localStorage cannot be accessed
    console.warn(e)
    return null
  }
}

const saveTheme = (theme: ThemeName) => {
  try {
    setLocalStorage('theme', theme)
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
