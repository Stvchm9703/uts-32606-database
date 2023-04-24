import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.CategoryCreateInput> = z
  .object({
    hashId: z.string(),
    name: z.string(),
    icon: z.string(),
  })
  .strict();

export const CategoryCreateInputObjectSchema = Schema;
