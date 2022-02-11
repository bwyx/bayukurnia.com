import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `blog/*.md`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true
    },
    publishedAt: {
      type: 'date',
      description: 'The date of the post',
      required: true
    }
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.md$/, '')
    }
  }
}))

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [Blog]
})
