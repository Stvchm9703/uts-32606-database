import { z } from 'zod';
import { AlbumProduceByArtistWhereInputObjectSchema } from './AlbumProduceByArtistWhereInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumProduceByArtistListRelationFilter> = z
  .object({
    every: z.lazy(() => AlbumProduceByArtistWhereInputObjectSchema).optional(),
    some: z.lazy(() => AlbumProduceByArtistWhereInputObjectSchema).optional(),
    none: z.lazy(() => AlbumProduceByArtistWhereInputObjectSchema).optional(),
  })
  .strict();

export const AlbumProduceByArtistListRelationFilterObjectSchema = Schema;
