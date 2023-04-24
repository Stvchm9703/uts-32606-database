import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { AlbumRelationFilterObjectSchema } from './AlbumRelationFilter.schema';
import { AlbumWhereInputObjectSchema } from './AlbumWhereInput.schema';
import { ArtistRelationFilterObjectSchema } from './ArtistRelationFilter.schema';
import { ArtistWhereInputObjectSchema } from './ArtistWhereInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumProduceByArtistWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AlbumProduceByArtistWhereInputObjectSchema),
        z.lazy(() => AlbumProduceByArtistWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AlbumProduceByArtistWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AlbumProduceByArtistWhereInputObjectSchema),
        z.lazy(() => AlbumProduceByArtistWhereInputObjectSchema).array(),
      ])
      .optional(),
    albumId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    artistId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    Album: z
      .union([
        z.lazy(() => AlbumRelationFilterObjectSchema),
        z.lazy(() => AlbumWhereInputObjectSchema),
      ])
      .optional(),
    Artist: z
      .union([
        z.lazy(() => ArtistRelationFilterObjectSchema),
        z.lazy(() => ArtistWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const AlbumProduceByArtistWhereInputObjectSchema = Schema;
