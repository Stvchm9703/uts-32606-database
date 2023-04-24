import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.CategorySumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
  })
  .strict();

export const CategorySumAggregateInputObjectSchema = Schema;
