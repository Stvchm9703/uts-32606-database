import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    popularity: z.literal(true).optional(),
    imageUrl: z.literal(true).optional(),
  })
  .strict();

export const ArtistMinAggregateInputObjectSchema = Schema;
