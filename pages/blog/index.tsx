import { attachMainLayout } from '~/layouts/Main.layout'
import { PostCard } from '~/components/blog'

import container from '~/styles/container.style'

import { getAllPosts } from '~/lib/notion'
import { getPostData } from '~/lib/post'

import type { GetStaticProps } from 'next'
import type { PostProperties } from '~/types'
import type { PostResult } from '~/types/notion.type'

interface PageProps {
  posts: PostProperties[]
}

const BlogIndex = ({ posts }: PageProps) => {
  return (
    <div className={container({ size: 'small' })}>
      {posts.map((props) => (
        <PostCard key={props.id} {...props} />
      ))}
    </div>
  )
}

BlogIndex.layout = attachMainLayout

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const { results } = await getAllPosts()

  const posts = await Promise.all(
    results.map((post) => getPostData(post as PostResult))
  )

  return {
    props: { posts },
    revalidate: process.env.ENV === 'local' ? 1 : 300
  }
}

export default BlogIndex
