import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    popularity: z.literal(true).optional(),
  })
  .strict();

export const ArtistSumAggregateInputObjectSchema = Schema;
