import { Client } from '@notionhq/client'
import { getPostData } from '~/lib/post'
import { hasOwnProperty } from '~/utils'
import config from '~/config'

import type { Block, PostResult } from '~/types/notion.type'
import type { PickedBlock } from '~/types'

const notion = new Client({ auth: config.NOTION_API_KEY })

export const getAllPosts = () =>
  notion.databases.query({
    database_id: config.NOTION_BLOG_DATABASE_ID,
    filter: {
      property: 'Published',
      checkbox: {
        equals: true
      }
    }
  })

export const getPostBySlug = async (slug: string) => {
  const postResponse = await notion.databases.query({
    database_id: config.NOTION_BLOG_DATABASE_ID,
    filter: {
      and: [
        {
          property: 'Published',
          checkbox: {
            equals: true
          }
        },
        {
          property: 'Slug',
          text: {
            equals: slug
          }
        }
      ]
    }
  })

  return getPostData(postResponse.results[0] as PostResult)
}

export const getBlocksByPostId = async (block_id: string) => {
  const blocksResult = await notion.blocks.children.list({ block_id })

  // Exclude unused properties
  return blocksResult.results.map((block) => {
    if (!hasOwnProperty(block, 'type')) return block
    const { id, type } = block as Block

    return {
      // Don't fully expose notion ids
      id: id.split('-')[0],
      type,
      [type]: block[type as keyof Block]
    }
  }) as PickedBlock[]
}

export default notion
