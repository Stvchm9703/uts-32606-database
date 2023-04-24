import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistOnFollowerSumAggregateInputType> = z
  .object({
    playlistId: z.literal(true).optional(),
    userId: z.literal(true).optional(),
  })
  .strict();

export const PlaylistOnFollowerSumAggregateInputObjectSchema = Schema;
