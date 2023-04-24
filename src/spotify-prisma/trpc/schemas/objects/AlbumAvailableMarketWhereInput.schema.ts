import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { AlbumRelationFilterObjectSchema } from './AlbumRelationFilter.schema';
import { AlbumWhereInputObjectSchema } from './AlbumWhereInput.schema';
import { TagRelationFilterObjectSchema } from './TagRelationFilter.schema';
import { TagWhereInputObjectSchema } from './TagWhereInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumAvailableMarketWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AlbumAvailableMarketWhereInputObjectSchema),
        z.lazy(() => AlbumAvailableMarketWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AlbumAvailableMarketWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AlbumAvailableMarketWhereInputObjectSchema),
        z.lazy(() => AlbumAvailableMarketWhereInputObjectSchema).array(),
      ])
      .optional(),
    albumId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    tagId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    Album: z
      .union([
        z.lazy(() => AlbumRelationFilterObjectSchema),
        z.lazy(() => AlbumWhereInputObjectSchema),
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

export const AlbumAvailableMarketWhereInputObjectSchema = Schema;
