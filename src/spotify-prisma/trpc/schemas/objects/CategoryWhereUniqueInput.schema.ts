import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.CategoryWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
    hashId: z.string().optional(),
  })
  .strict();

export const CategoryWhereUniqueInputObjectSchema = Schema;
