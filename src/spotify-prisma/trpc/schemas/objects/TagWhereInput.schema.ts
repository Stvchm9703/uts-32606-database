import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { AlbumAvailableMarketListRelationFilterObjectSchema } from './AlbumAvailableMarketListRelationFilter.schema';
import { TracksAvailableMarketListRelationFilterObjectSchema } from './TracksAvailableMarketListRelationFilter.schema';
import { ArtistInGenresListRelationFilterObjectSchema } from './ArtistInGenresListRelationFilter.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TagWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TagWhereInputObjectSchema),
        z.lazy(() => TagWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TagWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TagWhereInputObjectSchema),
        z.lazy(() => TagWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    code: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    type: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    AlbumAvailableMarket: z
      .lazy(() => AlbumAvailableMarketListRelationFilterObjectSchema)
      .optional(),
    TracksAvailableMarket: z
      .lazy(() => TracksAvailableMarketListRelationFilterObjectSchema)
      .optional(),
    ArtistInGenres: z
      .lazy(() => ArtistInGenresListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const TagWhereInputObjectSchema = Schema;
