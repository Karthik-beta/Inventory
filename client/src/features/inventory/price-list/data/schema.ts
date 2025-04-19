import { z } from 'zod'

export const itemSchema = z.object({
  name: z.string(),
  sku: z.string(),
  stockOnHand: z.number(),
  reOrderLevel: z.number(),
  itemId: z.string(),
  createdTime: z.date(),
  lastModifiedTime: z.date(),
  itemName: z.string(),
  salesDescription: z.string(),
  sellingPrice: z.string(),
  salesAccount: z.string(),
  isReturnable: z.boolean(),
});
export type Item = z.infer<typeof itemSchema>

export const itemListSchema = z.array(itemSchema)

export const priceSchema = z.object({
  name: z.string(),
  description: z.string(),
  items: itemListSchema,
})

export type PriceList = z.infer<typeof priceListSchema>

export const priceListSchema = z.array(priceSchema)