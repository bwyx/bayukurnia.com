import Link from 'next/link'
import { styled } from '~/styles'
import Container from '~/components/commons/Container'

const StyledHeader = styled('header', {
  position: 'fixed',
  width: '100%',
  height: '4rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
  backdropFilter: 'blur(8px)',
  '& .logo': {
    p: '0.5rem'
  },
  '& nav': {
    display: 'flex',
    alignItems: 'center',
    '& a': {
      mx: '0.5rem',
      p: '0.5rem'
    }
  }
})

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Link href="/">
          <a className="logo">Bayu Kurnia</a>
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
