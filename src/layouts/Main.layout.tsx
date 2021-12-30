import React from 'react'
import { Header, Footer } from '~/components'
import Container from '~/components/commons/Container'
import { styled } from '~/styles'

const StyledMain = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  alignItems: 'center',
  justifyContent: 'center'
})

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <StyledMain>
        <Container size="small">{children}</Container>
      </StyledMain>
      <Footer />
    </>
  )
}

export const attachMainLayout = (page: React.ReactNode) => {
  return <MainLayout>{page}</MainLayout>
}

export default MainLayout
