import { getPlaiceholder } from 'plaiceholder'

import type { PostResult } from '~/types/notion.type'
import type {
  Cover,
  NotionPostProperties,
  PostDataOptions,
  PostProperties,
  PostPropertiesWithRawId
} from '~/types'

export const getPostData = async (
  { id, ...post }: PostResult,
  options: PostDataOptions = { withRawId: false }
) => {
  const { Name, Description, PublishedDate, Slug } =
    post.properties as NotionPostProperties

  // Title
  const title = Name.title[0].plain_text

  // Snippet
  const richDescription = Description.rich_text

  // Published Date
  const rawDate = PublishedDate.date?.start ?? post.created_time
  const date = new Date(rawDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  })

  // Slug
  const slug = Slug.url

  const properties: PostProperties = {
    id: id.split('-')[0],
    title,
    richDescription,
    date,
    slug
  }

  // Cover Image
  const coverUrl =
    post.cover?.type === 'external' ? post.cover.external.url : null

  if (coverUrl) {
    const { base64, img } = await getPlaiceholder(coverUrl)
    properties.cover = <Cover>{
      blurDataURL: base64,
      ...img
    }
  }

  if (options.withRawId)
    return <PostPropertiesWithRawId>{ ...properties, rawId: id }

  return properties
}
