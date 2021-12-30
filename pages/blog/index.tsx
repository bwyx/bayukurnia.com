import Link from 'next/link'
import notion from '~/lib/notion'
import config from '~/config'

import type { GetStaticProps } from 'next'

const BlogIndex = ({ posts }: any) => {
  return (
    <div>
      {posts.map((p: any, i: number) => {
        const { slug, title } = p.properties

        return (
          <div key={i}>
            <br />
            <Link href={`/blog/[slug]`} as={`/blog/${slug.url}`}>
              <a>{title.title[0]?.plain_text}</a>
            </Link>
          </div>
        )
      })}

      {/* <pre style={{ fontSize: '11px', whiteSpace: 'pre-wrap' }}>
        {JSON.stringify(posts, null, 2)}
      </pre> */}
    </div>
  )
}

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
