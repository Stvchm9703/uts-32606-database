import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.CategoryMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    hashId: z.literal(true).optional(),
    name: z.literal(true).optional(),
    icon: z.literal(true).optional(),
  })
  .strict();

export const CategoryMinAggregateInputObjectSchema = Schema;