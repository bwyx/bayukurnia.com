import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypePrism from 'rehype-prism-plus'

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  contentType: 'mdx',
  filePathPattern: `blog/*.mdx`,
  fields: {
    title: { type: 'string', required: true },
    publishedAt: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    cover: { type: 'string', required: true }
  },
  computedFields: {
    path: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileDir
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '')
    }
  }
}))

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [Blog],
  mdx: {
    rehypePlugins: [rehypePrism]
  }
})
