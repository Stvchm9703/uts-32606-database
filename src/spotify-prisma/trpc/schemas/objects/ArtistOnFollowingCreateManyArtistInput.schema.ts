import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistOnFollowingCreateManyArtistInput> = z
  .object({
    userId: z.number(),
  })
  .strict();

export const ArtistOnFollowingCreateManyArtistInputObjectSchema = Schema;
