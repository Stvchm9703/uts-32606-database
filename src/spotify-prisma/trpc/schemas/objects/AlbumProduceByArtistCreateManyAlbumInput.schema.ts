import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumProduceByArtistCreateManyAlbumInput> = z
  .object({
    artistId: z.number(),
  })
  .strict();

export const AlbumProduceByArtistCreateManyAlbumInputObjectSchema = Schema;
