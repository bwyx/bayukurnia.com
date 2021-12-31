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
  pointerEvents: 'none',
  padding: '0.75rem 0',
  fontSize: '0.875rem',
  '@md': {
    height: 80
  },
  '& .logo': {
    pointerEvents: 'auto',
    display: 'inherit',
    color: '$brand',
    // filter: 'drop-shadow(2px 4px 5px var(--colors-brand))',
    '&:hover': {
      color: '$accent'
    }
  },
  '& nav': {
    pointerEvents: 'auto',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '0.5rem',
    padding: '0 0.5rem',
    backgroundColor: 'rgb(184 187 38 / 80%)',
    backdropFilter: 'saturate(180%) blur(1rem)',
    border: '1px solid $brand',
    '& a': {
      padding: '0.5rem',
      color: 'white',
      textDecoration: 'none',
      fontWeight: '500',
      '&:first-child': {},
      '&:last-child': {},
      '&:hover': {
        background: '$brand'
      }
    }
  }
})

const Header = () => {
  return (
    <StyledHeader>
      <Container css={{ alignItems: 'center' }}>
        <Link href="/">
          <a className="logo">
            <AnimatedLogo height={45} />
          </a>
        </Link>
        <nav>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </nav>
      </Container>
    </StyledHeader>
  )
}

export default Header
