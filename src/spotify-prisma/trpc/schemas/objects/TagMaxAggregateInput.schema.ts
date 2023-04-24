import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TagMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    code: z.literal(true).optional(),
    type: z.literal(true).optional(),
    name: z.literal(true).optional(),
  })
  .strict();

export const TagMaxAggregateInputObjectSchema = Schema;
