import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistDataMetaSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
  })
  .strict();

export const ArtistDataMetaSumAggregateInputObjectSchema = Schema;
