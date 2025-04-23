import { z } from 'zod'

export const adjustmentSchema = z.object({
  id: z.string(),
  date: z.coerce.date(),
  reason: z.string(),
  description: z.string(),
  status: z.string(),
  referenceNo: z.string(),
  type: z.string(),
  createdBy: z.string(),
  createdTime: z.coerce.date(),
  lastModifiedBy: z.string(),
  lastModifiedTime: z.coerce.date(),
});
export type Adjustment = z.infer<typeof adjustmentSchema>

export const adjustmentListSchema = z.array(adjustmentSchema)

export interface User {
  id: string;
  username: string;
  email: string;
  role: string;
}

export interface Item {
  id: string;
  name: string;
  stock: number;
}