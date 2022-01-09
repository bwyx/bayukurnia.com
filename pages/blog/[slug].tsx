import { attachMainLayout } from '~/layouts/Main.layout'
import SEO from '~/components/SEO'
import Hero from '~/components/Hero'
import ContentBlock from '~/components/ContentBlock'
import Article from '~/components/Article'
import notion from '~/lib/notion'
import config from '~/config'

import type { GetStaticProps } from 'next'
import type { PostProperties } from '~/types'
import type {
  Block,
  BlockType,
  ExtractedBlockType,
  PostResult
} from '~/types/notion.type'
import { hasOwnProperty } from '~/utils'
import Container from '~/components/commons/Container'

// TODO: Not sure if this is the best way to do this.
type PickedBlock = Pick<Block, 'id' | 'type'> & {
  [key in BlockType]: ExtractedBlockType<BlockType>
}

interface PageProps {
  title: string
  snippet: string
  publishedDate: string
  cover: string | null
  blocks: PickedBlock[]
}

const Post = ({ title, snippet, publishedDate, cover, blocks }: PageProps) => {
  return (
    <>
      <SEO title={title} />
      <Hero
        title={title}
        cover={cover}
        snippet={snippet}
        publishedDate={publishedDate}
      />
      <Container size="small">
        <Article>
          {Array.isArray(blocks) && blocks.length
            ? blocks.map((block: any) => (
                <ContentBlock key={block.id} block={block} />
              ))
            : null}
        </Article>
      </Container>
    </>
  )
}
Post.layout = attachMainLayout

export const getStaticProps: GetStaticProps<PageProps> = async (req: any) => {
  // Retrieve the post from the slug
  const postResponse = await notion.databases.query({
    database_id: config.NOTION_BLOG_DATABASE_ID,
    filter: {
      and: [
        // {
        //   property: 'Published',
        //   checkbox: {
        //     equals: true
        //   }
        // },
        {
          property: 'Slug',
          text: {
            equals: req.params.slug
          }
        }
      ]
    }
  })

  const postResults = postResponse.results[0] as PostResult
  const { id, properties, created_time } = postResults
  const { Name, Snippet, PublishedDate } = properties as PostProperties
  const title = Name.title[0].plain_text
  const snippet = Snippet.rich_text.map((text) => text.plain_text).join('')
  const unformattedDate = PublishedDate.date?.start ?? created_time
  const publishedDate = new Date(unformattedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  })

  const cover =
    postResults.cover?.type === 'external'
      ? postResults.cover.external.url
      : null

  // Retrieve content blocks
  const blockResponse = await notion.blocks.children.list({
    block_id: id
  })
  const blocks = blockResponse.results.map((block) => {
    if (!hasOwnProperty(block, 'type')) return
    const { id, type } = block as Block
    const blockData = block[type as keyof Block]

    return {
      // Don't fully expose notion ids
      id: id.split('-')[0],
      type,
      [type]: blockData
    }
  }) as unknown as PickedBlock[]

  return {
    props: {
      title,
      snippet,
      publishedDate,
      cover,
      blocks
    },
    revalidate: 300
  }
}

export const getStaticPaths = async () => {
  const response = await notion.databases.query({
    database_id: config.NOTION_BLOG_DATABASE_ID,
    filter: {
      property: 'Published',
      checkbox: {
        equals: true
      }
    }
  })

  const slug = response.results.map((post: any) => post.properties['Slug'].url)

  return {
    paths: slug.map((s: string) => '/blog/' + s),
    fallback: true
  }
}

export default Post
