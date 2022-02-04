import { useRouter } from 'next/router'
import Link from 'next/link'
import Logo from '~/components/vectors/Logo'

import styles from '~/styles/components/Header.style'

const Header = () => {
  const isHome = useRouter().pathname === '/'

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <a className={styles.logo}>
            <Logo animated={isHome} height={45} />
          </a>
        </Link>
        {/* <nav>
          <ul className={styles.menuList}>
            <li>
              <Link href="/about">
                <a className={styles.menuItem}>About</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a className={styles.menuItem}>Blog</a>
              </Link>
            </li>
          </ul>
        </nav> */}
      </div>
    </header>
  )
}

export default Header
