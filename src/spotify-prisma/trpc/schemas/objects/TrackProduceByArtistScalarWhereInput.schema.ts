import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackProduceByArtistScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TrackProduceByArtistScalarWhereInputObjectSchema),
        z.lazy(() => TrackProduceByArtistScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TrackProduceByArtistScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TrackProduceByArtistScalarWhereInputObjectSchema),
        z.lazy(() => TrackProduceByArtistScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    trackId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    artistId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const TrackProduceByArtistScalarWhereInputObjectSchema = Schema;
