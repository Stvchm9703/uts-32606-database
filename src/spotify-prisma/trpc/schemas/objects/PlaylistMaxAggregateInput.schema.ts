import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    uid: z.literal(true).optional(),
    collaborative: z.literal(true).optional(),
    description: z.literal(true).optional(),
    name: z.literal(true).optional(),
    public: z.literal(true).optional(),
    snapshotId: z.literal(true).optional(),
    primaryColor: z.literal(true).optional(),
    tracksIds: z.literal(true).optional(),
    ownerId: z.literal(true).optional(),
    imagesId: z.literal(true).optional(),
  })
  .strict();

export const PlaylistMaxAggregateInputObjectSchema = Schema;
