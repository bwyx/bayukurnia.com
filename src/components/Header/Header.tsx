import Link from 'next/link'
import { memo } from 'react'
import { useRouter } from 'next/router'

import { VisuallyHidden, ThemeToggle } from '~/components'
import Logo from '~/components/vectors/Logo/Logo'

import styles from './Header.css'

const Header = () => {
  const isHome = useRouter().pathname === '/'

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <a className={styles.link}>
            <VisuallyHidden>Beranda</VisuallyHidden>
            <Logo className={styles.logo} animated={isHome} height={45} />
          </a>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  )
}

export default memo(Header)
