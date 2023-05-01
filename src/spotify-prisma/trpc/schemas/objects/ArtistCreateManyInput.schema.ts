import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistCreateManyInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    popularity: z.number().optional().nullable(),
    imageUrl: z.string().optional().nullable(),
  })
  .strict();

export const ArtistCreateManyInputObjectSchema = Schema;
