import { z } from 'zod';
import { AlbumProduceByArtistAlbumIdArtistIdCompoundUniqueInputObjectSchema } from './AlbumProduceByArtistAlbumIdArtistIdCompoundUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumProduceByArtistWhereUniqueInput> = z
  .object({
    albumId_artistId: z
      .lazy(
        () =>
          AlbumProduceByArtistAlbumIdArtistIdCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AlbumProduceByArtistWhereUniqueInputObjectSchema = Schema;
