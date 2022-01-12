import React from 'react'
import { Header, Footer } from '~/components'
import { css } from '~/styles'

const main = css({
  overflow: 'hidden',
  flexGrow: 1
})

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className={main()}>{children}</main>
      <Footer />
    </>
  )
}

export const attachMainLayout = (page: React.ReactNode) => {
  return <MainLayout>{page}</MainLayout>
}

export default MainLayout
