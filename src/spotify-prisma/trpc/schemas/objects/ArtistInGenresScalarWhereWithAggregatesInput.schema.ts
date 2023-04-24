import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistInGenresScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ArtistInGenresScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => ArtistInGenresScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ArtistInGenresScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ArtistInGenresScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => ArtistInGenresScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    artistId: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    tagId: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const ArtistInGenresScalarWhereWithAggregatesInputObjectSchema = Schema;
