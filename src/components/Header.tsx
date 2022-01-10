import Link from 'next/link'
import { styled } from '~/styles'
import { Container } from '~/components/commons'
import Logo from '~/components/vectors/Logo'

const StyledHeader = styled('header', {
  position: 'sticky',
  top: 0,
  zIndex: 50,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgb($bg)',
  borderBottom: '1px solid transparent',
  borderImage:
    'linear-gradient(to right, rgba($bg / 5%), rgba($bg / 80%) 30%, rgba($bg / 20%) 80%, rgba($bg / 90%) 90%) 1',
  height: 60,
  '@supports (backdrop-filter: saturate(180%) blur(1rem))': {
    background: 'rgb($bg / .6)',
    backdropFilter: 'saturate(180%) blur(1rem)'
  },
  '@md': {
    height: 80
  },
  [`& ${Container}`]: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  '& .logo': {
    display: 'inherit',
    color: 'rgb($brand)',
    '& svg': {
      width: 'auto',
      height: 40,
      '@md': {
        height: 45
      }
    },
    '&:hover': {
      color: 'rgb($accent)'
    }
  },
  '& nav ul': {
    display: 'flex',
    alignItems: 'center',
    '& li:not(:last-child)': {
      marginRight: '0.5rem'
    },
    '& a': {
      textDecoration: 'none',
      fontSize: '$base',
      fontWeight: '500',
      color: 'rgb($brand)',
      '&:hover': {
        color: 'rgb($accent)'
      }
    }
  }
})

const Header = () => {
  return (
    <StyledHeader>
      <Container size="large">
        <Link href="/">
          <a className="logo">
            <Logo height={45} />
          </a>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </StyledHeader>
  )
}

export default Header
