import { useTheme } from '~/hooks'
import SunMoon from '~/components/vectors/SunMoon/SunMoon'

import styles from './ThemeToggle.css'

const ThemeToggle = () => {
  const { toggleTheme } = useTheme()

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
