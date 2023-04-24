import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    uid: z.literal(true).optional(),
    name: z.literal(true).optional(),
    discNumber: z.literal(true).optional(),
    durationMs: z.literal(true).optional(),
    explicit: z.literal(true).optional(),
    popularity: z.literal(true).optional(),
    previewUrl: z.literal(true).optional(),
    trackNumber: z.literal(true).optional(),
    isLocal: z.literal(true).optional(),
    albumId: z.literal(true).optional(),
  })
  .strict();

export const TrackMaxAggregateInputObjectSchema = Schema;
