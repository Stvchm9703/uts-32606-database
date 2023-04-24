import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumProduceByArtistUpdateManyMutationInput> = z
  .object({})
  .strict();

export const AlbumProduceByArtistUpdateManyMutationInputObjectSchema = Schema;
