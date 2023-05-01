import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistDataMetaCreateManyInput> = z
  .object({
    id: z.number(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    uid: z.string(),
  })
  .strict();

export const ArtistDataMetaCreateManyInputObjectSchema = Schema;
