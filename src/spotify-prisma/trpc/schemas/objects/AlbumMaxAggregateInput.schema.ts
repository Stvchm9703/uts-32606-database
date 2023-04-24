import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    uid: z.literal(true).optional(),
    albumType: z.literal(true).optional(),
    totalTracks: z.literal(true).optional(),
    name: z.literal(true).optional(),
    releaseDate: z.literal(true).optional(),
    releaseDatePrecision: z.literal(true).optional(),
    albumGroup: z.literal(true).optional(),
    copyrights: z.literal(true).optional(),
    imageUrl: z.literal(true).optional(),
  })
  .strict();

export const AlbumMaxAggregateInputObjectSchema = Schema;
