import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistOnFollowingScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () => ArtistOnFollowingScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () => ArtistOnFollowingScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(() => ArtistOnFollowingScalarWhereWithAggregatesInputObjectSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () => ArtistOnFollowingScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () => ArtistOnFollowingScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      artistId: z
        .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
        .optional(),
      userId: z
        .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
        .optional(),
    })
    .strict();

export const ArtistOnFollowingScalarWhereWithAggregatesInputObjectSchema =
  Schema;
