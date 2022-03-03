import Link from 'next/link'
import { useRouter } from 'next/router'

import { VisuallyHidden, ThemeToggle } from '~/components'
import Logo from '~/components/vectors/Logo'

import { css } from '~/styles'
import container from '~/styles/container.style'
import stack from '~/styles/stack.style'

const styles = {
  header: stack({
    y: 'center',
    density: 'spaceBetween',
    css: {
      mt: '$4',
      xBackground: '$bg',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      height: 50,
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
      '@lg': { height: 60 }
    }
  }),
  container: `${container({ size: 'large' })} ${stack({
    y: 'center',
    density: 'spaceBetween'
  })}`,
  logo: css({
    xColor: '$brand',
    display: 'inherit',
    '& svg': {
      width: 'auto',
      height: 35,
      '@lg': {
        height: 40
      }
    },
    '&:hover': { xColor: '$accent' }
  })(),
  menuList: stack({
    css: {
      '& li + li': { marginLeft: '0.5rem' }
    }
  }),
  menuItem: css({
    xColor: '$brand',
    textDecoration: 'none',
    fontSize: '$base',
    fontWeight: '500',
    '&:hover': { xColor: '$accent' }
  })()
}

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
