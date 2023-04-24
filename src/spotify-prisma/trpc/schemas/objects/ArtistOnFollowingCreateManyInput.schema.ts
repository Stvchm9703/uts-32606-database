import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistOnFollowingCreateManyInput> = z
  .object({
    artistId: z.number(),
    userId: z.number(),
  })
  .strict();

export const ArtistOnFollowingCreateManyInputObjectSchema = Schema;
