import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    albumType: z.literal(true).optional(),
    totalTracks: z.literal(true).optional(),
    name: z.literal(true).optional(),
    imageUrl: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const AlbumCountAggregateInputObjectSchema = Schema;
