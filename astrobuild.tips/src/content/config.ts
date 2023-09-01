import { z, defineCollection } from 'astro:content'

const tipsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    image: z.string().nullable(),
    tags: z.array(z.string()),
  }),
})

export const collections = {
  'tips': tipsCollection
}