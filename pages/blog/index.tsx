import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'

import { attachMainLayout } from '~/layouts/Main.layout'

import container from '~/styles/container.style'

import { allBlogs } from '.contentlayer/data'

import type { GetStaticProps } from 'next'
import { Blog } from '.contentlayer/types'

interface PageProps {
  posts: Blog[]
}

export const getStaticProps: GetStaticProps<PageProps> = () => {
  const posts = allBlogs.sort((a, b) => {
    return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
  })
  return { props: { posts } }
}

function PostCard(post: Blog) {
  return (
    <div className="mb-6">
      <time dateTime={post.publishedAt} className="block text-sm text-gray-600">
        {format(parseISO(post.publishedAt), 'LLLL d, yyyy')}
      </time>
      <h2 className="text-lg">
        <Link href={`/blog/${post.slug}`}>
          <a className="text-blue-700 hover:text-blue-900">{post.title}</a>
        </Link>
      </h2>
    </div>
  )
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
