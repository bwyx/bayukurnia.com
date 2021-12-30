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
  // backgroundColor: 'rgba(255, 255, 255, 0.6)',
  // backdropFilter: 'saturate(180%) blur(20px)',
  '& .logo': {
    pointerEvents: 'auto',
    padding: '0.5rem',
    color: '$brand'
  },
  '& nav': {
    pointerEvents: 'auto',
    display: 'flex',
    alignItems: 'center',
    '& a': {
      mx: '0.5rem',
      padding: '0.5rem'
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
