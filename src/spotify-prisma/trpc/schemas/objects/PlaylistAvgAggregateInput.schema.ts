import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    tracksIds: z.literal(true).optional(),
    ownerId: z.literal(true).optional(),
  })
  .strict();

export const PlaylistAvgAggregateInputObjectSchema = Schema;
