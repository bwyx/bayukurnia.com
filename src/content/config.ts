import { z, defineCollection } from 'astro:content'

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishedAt: z.date(),
    cover: z.string().optional(),
    language: z.enum(['id', 'en']).default('id')
  })
})

export const collections = {
  blog: blogCollection
}
