import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { ArtistInGenresListRelationFilterObjectSchema } from './ArtistInGenresListRelationFilter.schema';
import { TrackProduceByArtistListRelationFilterObjectSchema } from './TrackProduceByArtistListRelationFilter.schema';
import { AlbumProduceByArtistListRelationFilterObjectSchema } from './AlbumProduceByArtistListRelationFilter.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ArtistWhereInputObjectSchema),
        z.lazy(() => ArtistWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ArtistWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ArtistWhereInputObjectSchema),
        z.lazy(() => ArtistWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    popularity: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    imageUrl: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    Genres: z
      .lazy(() => ArtistInGenresListRelationFilterObjectSchema)
      .optional(),
    TrackProduceByArtist: z
      .lazy(() => TrackProduceByArtistListRelationFilterObjectSchema)
      .optional(),
    AlbumProduceByArtist: z
      .lazy(() => AlbumProduceByArtistListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const ArtistWhereInputObjectSchema = Schema;
