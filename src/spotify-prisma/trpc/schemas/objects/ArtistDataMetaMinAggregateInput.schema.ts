import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistDataMetaMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    uid: z.literal(true).optional(),
  })
  .strict();

export const ArtistDataMetaMinAggregateInputObjectSchema = Schema;
