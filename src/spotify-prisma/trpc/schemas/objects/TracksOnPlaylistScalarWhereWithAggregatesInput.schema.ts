import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksOnPlaylistScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () => TracksOnPlaylistScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () => TracksOnPlaylistScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(() => TracksOnPlaylistScalarWhereWithAggregatesInputObjectSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () => TracksOnPlaylistScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () => TracksOnPlaylistScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      playlistId: z
        .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
        .optional(),
      trackId: z
        .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
        .optional(),
    })
    .strict();

export const TracksOnPlaylistScalarWhereWithAggregatesInputObjectSchema =
  Schema;