import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'

import { attachMainLayout } from '~/layouts/Main.layout'

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

function PostCard({ title, slug, publishedAt, _raw }: Blog) {
  return (
    <div>
      <time dateTime={publishedAt}>
        {format(parseISO(publishedAt), 'LLLL d, yyyy')}
      </time>
      <h2>
        <Link href={`/${_raw.sourceFileDir}/${slug}`}>
          <a>{title}</a>
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
