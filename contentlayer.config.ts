import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `blog/*.md`,
  fields: {
    title: { type: 'string', required: true },
    publishedAt: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    cover: { type: 'string', required: true }
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
