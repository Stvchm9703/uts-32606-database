import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackMetaMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    uid: z.literal(true).optional(),
    durationMs: z.literal(true).optional(),
  })
  .strict();

export const TrackMetaMaxAggregateInputObjectSchema = Schema;
