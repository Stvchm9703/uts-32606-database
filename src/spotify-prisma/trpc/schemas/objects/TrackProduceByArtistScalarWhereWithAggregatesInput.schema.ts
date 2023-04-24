import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackProduceByArtistScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () =>
              TrackProduceByArtistScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TrackProduceByArtistScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(
          () => TrackProduceByArtistScalarWhereWithAggregatesInputObjectSchema,
        )
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () =>
              TrackProduceByArtistScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TrackProduceByArtistScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      trackId: z
        .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
        .optional(),
      artistId: z
        .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
        .optional(),
    })
    .strict();

export const TrackProduceByArtistScalarWhereWithAggregatesInputObjectSchema =
  Schema;
