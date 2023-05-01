import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistDataMetaUncheckedCreateInput> = z
  .object({
    id: z.number(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    uid: z.string(),
  })
  .strict();

export const ArtistDataMetaUncheckedCreateInputObjectSchema = Schema;
