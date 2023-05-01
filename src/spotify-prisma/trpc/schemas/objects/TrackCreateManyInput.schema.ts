import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackCreateManyInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    discNumber: z.number(),
    popularity: z.number().optional().nullable(),
    previewUrl: z.string().optional().nullable(),
    trackNumber: z.number(),
    albumId: z.number().optional().nullable(),
  })
  .strict();

export const TrackCreateManyInputObjectSchema = Schema;
