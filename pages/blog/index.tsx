import Link from 'next/link'
import { attachMainLayout } from '~/layouts/Main.layout'
import notion from '~/lib/notion'
import config from '~/config'

import type { GetStaticProps } from 'next'
import type { PostProperties } from '~/types'
import type { PostResult } from '~/types/notion.type'

interface PageProps {
  posts: PostProperties[]
}

const BlogIndex = ({ posts }: PageProps) => {
  return (
    <div
      className="BlogIndex"
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      {posts.map((post: any, i: number) => {
        const { title, slug } = post

        return (
          <Link key={i} href={`/blog/[slug]`} as={`/blog/${slug}`}>
            <a>{title}</a>
          </Link>
        )
      })}
    </div>
  )
}

BlogIndex.layout = attachMainLayout

export const getStaticProps: GetStaticProps = async () => {
  const { results } = await notion.databases.query({
    database_id: config.NOTION_BLOG_DATABASE_ID,
    filter: {
      property: 'Published',
      checkbox: {
        equals: true
      }
    }
  })

  const posts = results.map((post) => {
    const { properties } = post as PostResult
    const { Slug, Name } = properties as PostProperties

    return {
      slug: Slug.url,
      title: Name.title[0].plain_text
    }
  })

  return {
    props: { posts },
    revalidate: 300
  }
}

export default BlogIndex
