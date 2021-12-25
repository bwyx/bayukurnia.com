import Block from '~/components/Block'
import notion from '~/lib/notion'

const Post = ({ postData, blocks }: any) => {
  return (
    <div>
      <h1>{postData?.properties?.title?.title[0]?.plain_text}</h1>
      {/* <pre>{JSON.stringify(postData, null, 2)}</pre> */}
      {blocks?.results?.length
        ? blocks.results.map((block: any) => (
            <Block key={block.id} block={block} />
          ))
        : null}
    </div>
  )
}

export const getStaticProps = async ({ params }: any) => {
  const { slug } = params!

  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID as string,
    filter: {
      or: [
        {
          property: 'slug',
          text: {
            equals: slug
          }
        },
        {
          property: 'slugged',
          text: {
            equals: slug
          }
        }
      ]
    }
  })

  const postData = response.results[0]

  const blocks = await notion.blocks.children.list({
    block_id: postData.id
  })

  return {
    props: {
      postData,
      blocks
    }
  }
}

export const getStaticPaths = async () => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID as string
  })

  const slug = response.results.map((post: any) => {
    const { slug, slugged } = post.properties
    return slug.url || slugged.formula.string
  })

  return {
    paths: slug.map((s: string) => '/blog/' + s),
    fallback: true
  }
}

export default Post
