import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksAvailableMarketCountAggregateInputType> = z
  .object({
    tagId: z.literal(true).optional(),
    trackId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const TracksAvailableMarketCountAggregateInputObjectSchema = Schema;
