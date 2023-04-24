import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumProduceByArtistCreateManyArtistInput> = z
  .object({
    albumId: z.number(),
  })
  .strict();

export const AlbumProduceByArtistCreateManyArtistInputObjectSchema = Schema;
