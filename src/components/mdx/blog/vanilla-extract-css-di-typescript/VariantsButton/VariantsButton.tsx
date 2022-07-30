import styles from './VariantsButton.css'

import type { ButtonVariants } from './VariantsButton.css'

type ButtonProps = JSX.IntrinsicElements['button'] &
  ButtonVariants & {
    loading?: boolean
  }

function Loader() {
  return (
    <svg
      className={styles.loader}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      height={18}
      width={18}
    >
      <circle
        style={{ opacity: 0.5 }}
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        style={{ opacity: 0.75 }}
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  )
}

function VariantsButton({
  onClick,
  type = 'button',
  className = '',
  loading,
  children,

  // Style props
  variant,
  size,
  color,
  disabled,
  rounded,

  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading
  const styleProps = {
    variant,
    size,
    disabled: isDisabled,
    rounded,
    color
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isDisabled) return
    if (onClick) onClick(e)
  }

  return (
    <button
      {...props}
      type={type}
      onClick={handleClick}
      aria-disabled={isDisabled}
      className={`${styles.button({ ...styleProps })} ${className}`}
    >
      {loading && <Loader />}
      <span className={styles.children[loading ? 'hidden' : 'visible']}>
        {children}
      </span>
    </button>
  )
}

export default VariantsButton
