import { compareDesc } from 'date-fns'

import { attachMainLayout } from '~/layouts/Main.layout'
import { PostCard } from '~/components/blog'

import container from '~/styles/container.style'

import { pick } from 'contentlayer/client'
import { allBlogs } from 'contentlayer/generated'

import type { GetStaticProps } from 'next'
import type { PostProperties } from '~/types/blog.type'

interface PageProps {
  posts: PostProperties[]
}

export const getStaticProps: GetStaticProps<PageProps> = () => {
  const posts = allBlogs
    .sort((a, b) =>
      compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
    )
    .map((p) => pick(p, ['title', 'summary', 'publishedAt', 'path', 'slug']))

  return { props: { posts } }
}

const BlogIndex = ({ posts }: PageProps) => {
  return (
    <div className={container({ size: 'small' })}>
      {posts.map((post, i) => (
        <PostCard key={i} {...post} />
      ))}
    </div>
  )
}

BlogIndex.layout = attachMainLayout

export default BlogIndex
