import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistCreateManyInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    description: z.string(),
    public: z.boolean(),
    primaryColor: z.string().optional().nullable(),
    imagesId: z.string().optional().nullable(),
  })
  .strict();

export const PlaylistCreateManyInputObjectSchema = Schema;
