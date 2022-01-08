import {
  PropertyValueDate,
  PropertyValueRichText,
  PropertyValueTitle,
  PropertyValueUrl
} from './notion.type'

export type PostProperties = {
  Name: PropertyValueTitle
  Slug: PropertyValueUrl
  Snippet: PropertyValueRichText
  PublishedDate: PropertyValueDate
}
