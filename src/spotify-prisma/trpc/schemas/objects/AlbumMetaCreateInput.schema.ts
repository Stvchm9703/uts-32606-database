import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumMetaCreateInput> = z
  .object({
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    uid: z.string(),
    releaseDate: z.date(),
    releaseDatePrecision: z.string(),
    copyrights: z.string().optional().nullable(),
  })
  .strict();

export const AlbumMetaCreateInputObjectSchema = Schema;
