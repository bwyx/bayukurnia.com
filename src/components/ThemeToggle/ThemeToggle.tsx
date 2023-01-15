import { useStore } from 'zustand'
import themeStore from '~/stores/themeStore'

import SunMoon from '~/components/vectors/SunMoon/SunMoon'

import styles from './ThemeToggle.css'

const ThemeToggle = () => {
  const toggleTheme = useStore(themeStore, (s) => s.toggleTheme)

  return (
    <button
      className={styles.button}
      title="Toggles light & dark"
      aria-label="auto"
      aria-live="polite"
      onClick={toggleTheme}
    >
      <SunMoon />
    </button>
  )
}

export default ThemeToggle
