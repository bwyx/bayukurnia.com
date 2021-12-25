import Link from 'next/link'
import notion from '~/lib/notion'
import { GetStaticProps } from 'next'

const BlogIndex = ({ posts }: any) => {
  return (
    <div>
      {posts.results.map((p: any, i: number) => {
        const { slug, slugged, title } = p.properties
        const url = slug.url || slugged.formula.string

        return (
          <div key={i}>
            <br />
            <Link href={`/blog/[slug]`} as={`/blog/${url}`}>
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
  const posts = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID as string
  })

  return {
    props: {
      posts
    }
  }
}

export default BlogIndex
