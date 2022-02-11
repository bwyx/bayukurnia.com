import Link from 'next/link'

import { attachMainLayout } from '~/layouts/Main.layout'
import { SEO, Article } from '~/components'
import { Hero } from '~/components/blog'

import container from '~/styles/container.style'

import { allBlogs } from 'contentlayer/generated'

import type { GetStaticProps } from 'next'
import type { Blog } from 'contentlayer/generated'

interface PageProps {
  post: Blog
}

const BlogIndex = ({ post }: PageProps) => {
  return (
    <>
      <SEO title={post.title} />
      <Hero {...post} />
      <div className={container({ size: 'small' })}>
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

export const getStaticPaths = () => {
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

export default BlogIndex
