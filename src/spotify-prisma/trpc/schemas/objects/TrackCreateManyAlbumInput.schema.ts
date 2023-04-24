import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackCreateManyAlbumInput> = z
  .object({
    id: z.number().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    uid: z.string(),
    name: z.string(),
    discNumber: z.number(),
    durationMs: z.number(),
    explicit: z.boolean(),
    popularity: z.number().optional().nullable(),
    previewUrl: z.string().optional().nullable(),
    trackNumber: z.number(),
    isLocal: z.boolean(),
  })
  .strict();

export const TrackCreateManyAlbumInputObjectSchema = Schema;
