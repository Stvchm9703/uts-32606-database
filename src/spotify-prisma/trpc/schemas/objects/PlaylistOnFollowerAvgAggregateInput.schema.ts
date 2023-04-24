import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistOnFollowerAvgAggregateInputType> = z
  .object({
    playlistId: z.literal(true).optional(),
    userId: z.literal(true).optional(),
  })
  .strict();

export const PlaylistOnFollowerAvgAggregateInputObjectSchema = Schema;
