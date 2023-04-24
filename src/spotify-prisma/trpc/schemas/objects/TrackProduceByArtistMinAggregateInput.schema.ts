import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackProduceByArtistMinAggregateInputType> = z
  .object({
    trackId: z.literal(true).optional(),
    artistId: z.literal(true).optional(),
  })
  .strict();

export const TrackProduceByArtistMinAggregateInputObjectSchema = Schema;
