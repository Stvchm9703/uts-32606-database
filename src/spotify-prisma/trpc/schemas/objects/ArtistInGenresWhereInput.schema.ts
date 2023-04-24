import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { ArtistRelationFilterObjectSchema } from './ArtistRelationFilter.schema';
import { ArtistWhereInputObjectSchema } from './ArtistWhereInput.schema';
import { TagRelationFilterObjectSchema } from './TagRelationFilter.schema';
import { TagWhereInputObjectSchema } from './TagWhereInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistInGenresWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ArtistInGenresWhereInputObjectSchema),
        z.lazy(() => ArtistInGenresWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ArtistInGenresWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ArtistInGenresWhereInputObjectSchema),
        z.lazy(() => ArtistInGenresWhereInputObjectSchema).array(),
      ])
      .optional(),
    artistId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    tagId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    Artist: z
      .union([
        z.lazy(() => ArtistRelationFilterObjectSchema),
        z.lazy(() => ArtistWhereInputObjectSchema),
      ])
      .optional(),
    Tag: z
      .union([
        z.lazy(() => TagRelationFilterObjectSchema),
        z.lazy(() => TagWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ArtistInGenresWhereInputObjectSchema = Schema;
