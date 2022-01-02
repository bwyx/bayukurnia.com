import Link from 'next/link'
import { styled } from '~/styles'
import Container from '~/components/commons/Container'
import AnimatedLogo from '~/components/vectors/AnimatedLogo'

const StyledHeader = styled('header', {
  position: 'sticky',
  top: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgb($bg / .7)',
  backdropFilter: 'saturate(180%) blur(1rem)',
  height: 60,
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
      <Container>
        <Link href="/">
          <a className="logo">
            <AnimatedLogo height={45} />
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
