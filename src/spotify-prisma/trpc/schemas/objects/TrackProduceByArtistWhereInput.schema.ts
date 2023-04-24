import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { TrackRelationFilterObjectSchema } from './TrackRelationFilter.schema';
import { TrackWhereInputObjectSchema } from './TrackWhereInput.schema';
import { ArtistRelationFilterObjectSchema } from './ArtistRelationFilter.schema';
import { ArtistWhereInputObjectSchema } from './ArtistWhereInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackProduceByArtistWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TrackProduceByArtistWhereInputObjectSchema),
        z.lazy(() => TrackProduceByArtistWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TrackProduceByArtistWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TrackProduceByArtistWhereInputObjectSchema),
        z.lazy(() => TrackProduceByArtistWhereInputObjectSchema).array(),
      ])
      .optional(),
    trackId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    artistId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    Track: z
      .union([
        z.lazy(() => TrackRelationFilterObjectSchema),
        z.lazy(() => TrackWhereInputObjectSchema),
      ])
      .optional(),
    Artists: z
      .union([
        z.lazy(() => ArtistRelationFilterObjectSchema),
        z.lazy(() => ArtistWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const TrackProduceByArtistWhereInputObjectSchema = Schema;
