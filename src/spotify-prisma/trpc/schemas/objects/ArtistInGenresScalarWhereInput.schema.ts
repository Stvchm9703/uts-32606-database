import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistInGenresScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ArtistInGenresScalarWhereInputObjectSchema),
        z.lazy(() => ArtistInGenresScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ArtistInGenresScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ArtistInGenresScalarWhereInputObjectSchema),
        z.lazy(() => ArtistInGenresScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    artistId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    tagId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const ArtistInGenresScalarWhereInputObjectSchema = Schema;
