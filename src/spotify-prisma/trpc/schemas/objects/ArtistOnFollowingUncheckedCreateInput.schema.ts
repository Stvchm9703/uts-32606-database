import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistOnFollowingUncheckedCreateInput> = z
  .object({
    artistId: z.number(),
    userId: z.number(),
  })
  .strict();

export const ArtistOnFollowingUncheckedCreateInputObjectSchema = Schema;
