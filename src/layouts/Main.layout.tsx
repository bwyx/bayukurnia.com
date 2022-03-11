import React from 'react'
import { Header, Footer } from '~/components'

import { stack } from '~/styles/primitives'

const main = stack({
  dir: 'col',
  grow: true,
  css: {
    overflow: 'hidden'
  }
})

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export const MainWrapper: React.FC = ({ children }) => {
  return <main className={main}>{children}</main>
}

export const attachMainLayout = (page: React.ReactNode) => {
  return <MainLayout>{page}</MainLayout>
}

export default MainLayout
