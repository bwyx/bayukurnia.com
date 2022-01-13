import Link from 'next/link'
import Logo from '~/components/vectors/Logo'

import { css } from '~/styles'
import styles from '~/styles/components/Header.style'
import container from '~/styles/container.style'

const header = css({
  xBackground: '$bg',
  position: 'sticky',
  top: 0,
  zIndex: 50,
  height: 60,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottom: '1px solid transparent',
  borderImage:
    'linear-gradient(to right, rgb($rgb$bg / 5%), rgb($rgb$bg / 80%) 30%, rgb($rgb$bg / 20%) 80%, rgb($rgb$bg / 90%) 90%) 1',
  '@supports (backdrop-filter: saturate(180%) blur(1rem))': {
    xBackgroundOpacity: 0.6,
    backdropFilter: 'saturate(180%) blur(1rem)'
  },
  '@md': { height: 80 },
  [`& .${container}`]: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  '& .logo': {
    xColor: '$brand',
    display: 'inherit',
    '& svg': {
      width: 'auto',
      height: 40,
      '@md': {
        height: 45
      }
    },
    '&:hover': { xColor: '$accent' }
  },
  '& nav ul': {
    display: 'flex',
    alignItems: 'center',
    '& li:not(:last-child)': { marginRight: '0.5rem' },
    '& a': {
      xColor: '$brand',
      textDecoration: 'none',
      fontSize: '$base',
      fontWeight: '500',
      '&:hover': { xColor: '$accent' }
    }
  }
})

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <a className={styles.logo}>
            <Logo height={45} />
          </a>
        </Link>
        <nav>
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
        </nav>
      </div>
    </header>
  )
}

export default Header
