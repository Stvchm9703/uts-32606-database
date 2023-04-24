import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumCreateManyInput> = z
  .object({
    id: z.number().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    uid: z.string(),
    albumType: z.string(),
    totalTracks: z.number(),
    name: z.string(),
    releaseDate: z.date(),
    releaseDatePrecision: z.string(),
    albumGroup: z.string(),
    copyrights: z.string().optional().nullable(),
    imageUrl: z.string().optional().nullable(),
  })
  .strict();

export const AlbumCreateManyInputObjectSchema = Schema;
