import { useTheme } from '~/hooks'
import SunMoon from '~/components/vectors/SunMoon/SunMoon'

const ThemeToggle = () => {
  const { toggleTheme } = useTheme()

  return (
    <button
      className="theme-toggle"
      id="theme-toggle"
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
