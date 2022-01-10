import type { PostResult } from '~/types/notion.type'
import type { NotionPostProperties } from '~/types'

export const getPostData = ({ id, ...post }: PostResult) => {
  const { Name, Snippet, PublishedDate } =
    post.properties as NotionPostProperties

  // Title
  const title = Name.title[0].plain_text

  // Snippet
  const richSnippet = Snippet.rich_text

  // Published Date
  const unformattedDate = PublishedDate.date?.start ?? post.created_time
  const publishedDate = new Date(unformattedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  })

  // Cover Image
  const cover = post.cover?.type === 'external' ? post.cover.external.url : null

  return { id, title, richSnippet, publishedDate, cover }
}
