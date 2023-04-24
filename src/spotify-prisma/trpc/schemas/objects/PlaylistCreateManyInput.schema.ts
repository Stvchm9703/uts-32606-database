import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistCreateManyInput> = z
  .object({
    id: z.number().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    uid: z.string().optional().nullable(),
    collaborative: z.boolean(),
    description: z.string(),
    name: z.string(),
    public: z.boolean(),
    snapshotId: z.string().optional().nullable(),
    primaryColor: z.string().optional().nullable(),
    tracksIds: z.number(),
    ownerId: z.number(),
    imagesId: z.string().optional().nullable(),
  })
  .strict();

export const PlaylistCreateManyInputObjectSchema = Schema;
