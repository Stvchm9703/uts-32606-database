import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksAvailableMarketMaxAggregateInputType> = z
  .object({
    tagId: z.literal(true).optional(),
    trackId: z.literal(true).optional(),
  })
  .strict();

export const TracksAvailableMarketMaxAggregateInputObjectSchema = Schema;
