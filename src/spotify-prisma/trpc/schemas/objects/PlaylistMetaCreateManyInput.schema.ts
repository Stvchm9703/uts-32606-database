import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistMetaCreateManyInput> = z
  .object({
    id: z.number().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    uid: z.string().optional().nullable(),
  })
  .strict();

export const PlaylistMetaCreateManyInputObjectSchema = Schema;
