import Head from 'next/head'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'

import { attachMainLayout } from '~/layouts/Main.layout'
import { Article } from '~/components'

import container from '~/styles/container.style'

import { allBlogs } from '.contentlayer/data'

import type { GetStaticProps } from 'next'
import type { Blog } from '.contentlayer/types'

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false
  }
}
export const getStaticProps: GetStaticProps = ({ params }) => {
  const post = allBlogs.find((post) => post.slug === params?.slug)

  return {
    props: {
      post
    }
  }
}

interface PageProps {
  post: Blog
}

const BlogIndex = ({ post }: PageProps) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div className={container({ size: 'small' })}>
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
        <div>
          <h1>{post.title}</h1>
          <time dateTime={post.publishedAt}>
            {format(parseISO(post.publishedAt), 'LLLL d, yyyy')}
          </time>
        </div>
        <Article>
          <div
            className="cl-post-body"
            dangerouslySetInnerHTML={{ __html: post.body.html }}
          />
        </Article>
      </div>
    </>
  )
}

BlogIndex.layout = attachMainLayout

export default BlogIndex
