import {
  Block,
  PropertyValueDate,
  PropertyValueRichText,
  PropertyValueTitle,
  PropertyValueUrl
} from './notion.type'

export type NotionPostProperties = {
  Name: PropertyValueTitle
  Slug: PropertyValueUrl
  Snippet: PropertyValueRichText
  PublishedDate: PropertyValueDate
}

type ExcludedProperties =
  | 'object'
  | 'created_time'
  | 'last_edited_time'
  | 'has_children'
  | 'archived'

export type PickedBlock = Exclude<Block, ExcludedProperties>
