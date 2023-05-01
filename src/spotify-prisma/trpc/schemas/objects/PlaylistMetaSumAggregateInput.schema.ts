import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistMetaSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
  })
  .strict();

export const PlaylistMetaSumAggregateInputObjectSchema = Schema;
