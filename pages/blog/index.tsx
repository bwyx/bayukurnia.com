import Link from 'next/link'
import { attachMainLayout } from '~/layouts/Main.layout'
import notion from '~/lib/notion'
import config from '~/config'

import type { GetStaticProps } from 'next'
import type { Page } from '~/types/page.type'

const BlogIndex: Page = ({ posts }: any) => {
  return (
    <div
      className="BlogIndex"
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      {posts.map((p: any, i: number) => {
        const { slug, title } = p.properties

        return (
          <Link key={i} href={`/blog/[slug]`} as={`/blog/${slug.url}`}>
            <a>{title.title[0]?.plain_text}</a>
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
      property: 'published',
      checkbox: {
        equals: true
      }
    }
  })

  return {
    props: {
      posts: results
    },
    revalidate: 60
  }
}

export default BlogIndex
