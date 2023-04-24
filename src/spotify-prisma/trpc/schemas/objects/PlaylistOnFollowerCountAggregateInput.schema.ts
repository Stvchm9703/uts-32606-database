import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistOnFollowerCountAggregateInputType> = z
  .object({
    playlistId: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const PlaylistOnFollowerCountAggregateInputObjectSchema = Schema;
