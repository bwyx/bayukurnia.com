import React from 'react'
import { Header, Footer } from '~/components'
import { styled } from '~/styles'

const StyledMain = styled('main', {
  overflow: 'hidden',
  flexGrow: 1
})

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  )
}

export const attachMainLayout = (page: React.ReactNode) => {
  return <MainLayout>{page}</MainLayout>
}

export default MainLayout
