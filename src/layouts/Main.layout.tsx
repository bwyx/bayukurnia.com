import React from 'react'
import { Header, Footer } from '~/components'

import stack from '~/styles/stack.style'

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
      <main className={main}>{children}</main>
      <Footer />
    </>
  )
}

export const attachMainLayout = (page: React.ReactNode) => {
  return <MainLayout>{page}</MainLayout>
}

export default MainLayout
