import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackProduceByArtistMaxAggregateInputType> = z
  .object({
    trackId: z.literal(true).optional(),
    artistId: z.literal(true).optional(),
  })
  .strict();

export const TrackProduceByArtistMaxAggregateInputObjectSchema = Schema;
