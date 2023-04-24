import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    totalTracks: z.literal(true).optional(),
  })
  .strict();

export const AlbumSumAggregateInputObjectSchema = Schema;
