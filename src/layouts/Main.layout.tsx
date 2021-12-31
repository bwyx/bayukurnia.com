import React from 'react'
import { Header, Footer } from '~/components'
import Container from '~/components/commons/Container'
import { styled } from '~/styles'

const StyledMain = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1
})

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <StyledMain>
        <Container size="small" css={{ flexDirection: 'column' }}>
          {children}
        </Container>
      </StyledMain>
      <Footer />
    </>
  )
}

export const attachMainLayout = (page: React.ReactNode) => {
  return <MainLayout>{page}</MainLayout>
}

export default MainLayout
