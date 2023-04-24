import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumAvailableMarketMinAggregateInputType> = z
  .object({
    albumId: z.literal(true).optional(),
    tagId: z.literal(true).optional(),
  })
  .strict();

export const AlbumAvailableMarketMinAggregateInputObjectSchema = Schema;
