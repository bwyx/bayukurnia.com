import Link from 'next/link'

import { attachMainLayout } from '~/layouts/Main.layout'
import { SEO, Article } from '~/components'
import { Hero } from '~/components/blog'

import container from '~/styles/container.style'

import { pick } from 'contentlayer/client'
import { allBlogs, Blog } from 'contentlayer/generated'

import type { GetStaticProps } from 'next'
import type { PostWithCoverAndBody } from '~/types/blog.type'
import { generateCoverPlaceholder } from '~/lib/plaiceholder'

const Post = ({ body, ...post }: PostWithCoverAndBody) => {

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

Post.layout = attachMainLayout

export const getStaticPaths = () => {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<PostWithCoverAndBody> = async ({
  params
}) => {
  const blog = allBlogs.find((post) => post.slug === params?.slug)!

  const cover = await generateCoverPlaceholder(
    `/static/images/${blog.path}/${blog.slug}/${blog.cover}`
  )

  const postProperties: (keyof Blog)[] = [
    'title',
    'summary',
    'publishedAt',
    'path',
    'slug',
    'body'
  ]

  return {
    props: {
      ...pick(blog, postProperties),
      cover
    }
  }
}

export default Post
