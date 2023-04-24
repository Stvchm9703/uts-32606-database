import { z } from 'zod';
import { TrackProduceByArtistWhereInputObjectSchema } from './TrackProduceByArtistWhereInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackProduceByArtistListRelationFilter> = z
  .object({
    every: z.lazy(() => TrackProduceByArtistWhereInputObjectSchema).optional(),
    some: z.lazy(() => TrackProduceByArtistWhereInputObjectSchema).optional(),
    none: z.lazy(() => TrackProduceByArtistWhereInputObjectSchema).optional(),
  })
  .strict();

export const TrackProduceByArtistListRelationFilterObjectSchema = Schema;
