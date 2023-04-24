import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumProduceByArtistAlbumIdArtistIdCompoundUniqueInput> =
  z
    .object({
      albumId: z.number(),
      artistId: z.number(),
    })
    .strict();

export const AlbumProduceByArtistAlbumIdArtistIdCompoundUniqueInputObjectSchema =
  Schema;
