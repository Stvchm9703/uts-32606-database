import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistOnFollowerScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () => PlaylistOnFollowerScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PlaylistOnFollowerScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(
          () => PlaylistOnFollowerScalarWhereWithAggregatesInputObjectSchema,
        )
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () => PlaylistOnFollowerScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PlaylistOnFollowerScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      playlistId: z
        .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
        .optional(),
      userId: z
        .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
        .optional(),
    })
    .strict();

export const PlaylistOnFollowerScalarWhereWithAggregatesInputObjectSchema =
  Schema;
