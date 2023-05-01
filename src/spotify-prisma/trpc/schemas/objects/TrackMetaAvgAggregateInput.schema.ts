import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackMetaAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    durationMs: z.literal(true).optional(),
  })
  .strict();

export const TrackMetaAvgAggregateInputObjectSchema = Schema;
