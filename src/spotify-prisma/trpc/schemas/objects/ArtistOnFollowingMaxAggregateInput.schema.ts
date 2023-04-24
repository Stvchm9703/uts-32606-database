import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistOnFollowingMaxAggregateInputType> = z
  .object({
    artistId: z.literal(true).optional(),
    userId: z.literal(true).optional(),
  })
  .strict();

export const ArtistOnFollowingMaxAggregateInputObjectSchema = Schema;
