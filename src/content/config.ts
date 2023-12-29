import { z, defineCollection } from 'astro:content'

const productCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    price: z.number(),
    image: z.string(),
  })
})

export const collections = {
  'products': productCollection,
}
