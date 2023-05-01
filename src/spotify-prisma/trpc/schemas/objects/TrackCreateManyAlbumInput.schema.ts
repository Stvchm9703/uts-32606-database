import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackCreateManyAlbumInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    discNumber: z.number(),
    popularity: z.number().optional().nullable(),
    previewUrl: z.string().optional().nullable(),
    trackNumber: z.number(),
  })
  .strict();

export const TrackCreateManyAlbumInputObjectSchema = Schema;
