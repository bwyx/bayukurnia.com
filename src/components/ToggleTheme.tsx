import { useEffect, useState } from 'react'
import { darkTheme, lightTheme } from '~/styles/themes'

const ToggleTheme = () => {
  const [theme, setTheme] = useState(lightTheme.className)

  const toggle = () => {
    setTheme(
      theme === lightTheme.className
        ? darkTheme.className
        : lightTheme.className
    )
  }
  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return <button onClick={toggle}>{theme}</button>
}

export default ToggleTheme
