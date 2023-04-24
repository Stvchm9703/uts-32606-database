import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistOnFollowingCreateManyUserInput> = z
  .object({
    artistId: z.number(),
  })
  .strict();

export const ArtistOnFollowingCreateManyUserInputObjectSchema = Schema;
