import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistMetaCreateInput> = z
  .object({
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    uid: z.string().optional().nullable(),
  })
  .strict();

export const PlaylistMetaCreateInputObjectSchema = Schema;
