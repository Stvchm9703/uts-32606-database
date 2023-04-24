import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksOnPlaylistCountAggregateInputType> = z
  .object({
    playlistId: z.literal(true).optional(),
    trackId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const TracksOnPlaylistCountAggregateInputObjectSchema = Schema;
