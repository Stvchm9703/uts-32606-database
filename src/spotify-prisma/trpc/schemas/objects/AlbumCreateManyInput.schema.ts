import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumCreateManyInput> = z
  .object({
    id: z.number().optional(),
    albumType: z.string(),
    totalTracks: z.number(),
    name: z.string(),
    imageUrl: z.string().optional().nullable(),
  })
  .strict();

export const AlbumCreateManyInputObjectSchema = Schema;
