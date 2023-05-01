import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    discNumber: z.literal(true).optional(),
    popularity: z.literal(true).optional(),
    previewUrl: z.literal(true).optional(),
    trackNumber: z.literal(true).optional(),
    albumId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const TrackCountAggregateInputObjectSchema = Schema;
