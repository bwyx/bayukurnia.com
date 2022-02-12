import Link from 'next/link'
import { useRouter } from 'next/router'

import { VisuallyHidden, ThemeToggle } from '~/components'
import Logo from '~/components/vectors/Logo'

import styles from '~/styles/components/Header.style'

const Header = () => {
  const isHome = useRouter().pathname === '/'

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <a className={styles.logo}>
            <VisuallyHidden>Beranda</VisuallyHidden>
            <Logo animated={isHome} height={45} />
          </a>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header
