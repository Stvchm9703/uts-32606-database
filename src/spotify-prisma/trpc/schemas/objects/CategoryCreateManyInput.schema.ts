import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.CategoryCreateManyInput> = z
  .object({
    id: z.number().optional(),
    hashId: z.string(),
    name: z.string(),
    icon: z.string(),
  })
  .strict();

export const CategoryCreateManyInputObjectSchema = Schema;
