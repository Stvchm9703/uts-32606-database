import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackMetaSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    durationMs: z.literal(true).optional(),
  })
  .strict();

export const TrackMetaSumAggregateInputObjectSchema = Schema;
