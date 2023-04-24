import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistOnFollowingCountAggregateInputType> = z
  .object({
    artistId: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const ArtistOnFollowingCountAggregateInputObjectSchema = Schema;
