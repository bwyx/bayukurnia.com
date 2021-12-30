import Block from '~/components/Block'
import notion from '~/lib/notion'
import config from '~/config'

const Post = ({ post, blocks }: any) => {
  return (
    <article>
      <h1 style={{ color: 'red', fontSize: '5rem' }}>
        {post?.properties?.title?.title[0]?.plain_text}
      </h1>
      {blocks?.length
        ? blocks.map((block: any) => <Block key={block.id} block={block} />)
        : null}
    </article>
  )
}

export const getStaticProps = async (req: any) => {
  const { results: postResults } = await notion.databases.query({
    database_id: config.NOTION_BLOG_DATABASE_ID,
    filter: {
      and: [
        {
          property: 'published',
          checkbox: {
            equals: true
          }
        },
        {
          property: 'slug',
          text: {
            equals: req.params.slug
          }
        }
      ]
    }
  })

  const { results: blockResults } = await notion.blocks.children.list({
    block_id: postResults[0].id
  })

  return {
    props: {
      post: postResults[0],
      blocks: blockResults
    },
    revalidate: 10
  }
}

export const getStaticPaths = async () => {
  const response = await notion.databases.query({
    database_id: config.NOTION_BLOG_DATABASE_ID
  })

  const slug = response.results.map((post: any) => post.properties.slug.url)

  return {
    paths: slug.map((s: string) => '/blog/' + s),
    fallback: true
  }
}

export default Post
