import MainLayout from '~/layouts/Main.layout'
import Link from 'next/link'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
    </MainLayout>
  )
}

export default Home
