import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumProduceByArtistMinAggregateInputType> = z
  .object({
    albumId: z.literal(true).optional(),
    artistId: z.literal(true).optional(),
  })
  .strict();

export const AlbumProduceByArtistMinAggregateInputObjectSchema = Schema;
