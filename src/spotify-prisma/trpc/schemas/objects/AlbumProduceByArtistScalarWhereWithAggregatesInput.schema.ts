import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumProduceByArtistScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () =>
              AlbumProduceByArtistScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AlbumProduceByArtistScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(
          () => AlbumProduceByArtistScalarWhereWithAggregatesInputObjectSchema,
        )
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () =>
              AlbumProduceByArtistScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AlbumProduceByArtistScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      albumId: z
        .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
        .optional(),
      artistId: z
        .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
        .optional(),
    })
    .strict();

export const AlbumProduceByArtistScalarWhereWithAggregatesInputObjectSchema =
  Schema;
