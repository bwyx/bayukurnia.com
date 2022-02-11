import { compareDesc } from 'date-fns'

import { attachMainLayout } from '~/layouts/Main.layout'
import { PostCard } from '~/components/blog'

import container from '~/styles/container.style'

import { allBlogs } from 'contentlayer/generated'

import type { GetStaticProps } from 'next'
import { Blog } from 'contentlayer/generated'

interface PageProps {
  posts: Blog[]
}

export const getStaticProps: GetStaticProps<PageProps> = () => {
  const posts = allBlogs.sort((a, b) => {
    return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
  })
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
