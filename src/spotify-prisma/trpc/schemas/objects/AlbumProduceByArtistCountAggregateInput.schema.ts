import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumProduceByArtistCountAggregateInputType> = z
  .object({
    albumId: z.literal(true).optional(),
    artistId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const AlbumProduceByArtistCountAggregateInputObjectSchema = Schema;
