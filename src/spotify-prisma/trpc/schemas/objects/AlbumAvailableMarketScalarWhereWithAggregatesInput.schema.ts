import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumAvailableMarketScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () =>
              AlbumAvailableMarketScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AlbumAvailableMarketScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(
          () => AlbumAvailableMarketScalarWhereWithAggregatesInputObjectSchema,
        )
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () =>
              AlbumAvailableMarketScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AlbumAvailableMarketScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      albumId: z
        .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
        .optional(),
      tagId: z
        .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
        .optional(),
    })
    .strict();

export const AlbumAvailableMarketScalarWhereWithAggregatesInputObjectSchema =
  Schema;
