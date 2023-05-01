import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
  })
  .strict();

export const PlaylistSumAggregateInputObjectSchema = Schema;
