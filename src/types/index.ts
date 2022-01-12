import {
  Block,
  PropertyValueDate,
  PropertyValueRichText,
  PropertyValueTitle,
  PropertyValueUrl,
  RichText
} from './notion.type'

export type NotionPostProperties = {
  Name: PropertyValueTitle
  Slug: PropertyValueUrl
  Description: PropertyValueRichText
  PublishedDate: PropertyValueDate
}

type ExcludedProperties =
  | 'object'
  | 'created_time'
  | 'last_edited_time'
  | 'has_children'
  | 'archived'

export type PickedBlock = Exclude<Block, ExcludedProperties>

export type PostProperties = {
  id: string
  title: string
  richDescription: RichText[]
  date: string
  slug: string | null
  cover: string | null
}

export type PostPropertiesWithRawId = PostProperties & {
  rawId: string
}

export type PostPropertiesWithBlocks = PostProperties & {
  blocks: PickedBlock[]
}

export type PostDataOptions = {
  withRawId?: boolean
}
