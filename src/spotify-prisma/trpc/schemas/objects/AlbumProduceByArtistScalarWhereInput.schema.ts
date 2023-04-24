import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumProduceByArtistScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AlbumProduceByArtistScalarWhereInputObjectSchema),
        z.lazy(() => AlbumProduceByArtistScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AlbumProduceByArtistScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AlbumProduceByArtistScalarWhereInputObjectSchema),
        z.lazy(() => AlbumProduceByArtistScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    albumId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    artistId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const AlbumProduceByArtistScalarWhereInputObjectSchema = Schema;
