import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistOnFollowingMinAggregateInputType> = z
  .object({
    artistId: z.literal(true).optional(),
    userId: z.literal(true).optional(),
  })
  .strict();

export const ArtistOnFollowingMinAggregateInputObjectSchema = Schema;
