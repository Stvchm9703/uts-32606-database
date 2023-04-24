import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TagWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
    code: z.string().optional(),
  })
  .strict();

export const TagWhereUniqueInputObjectSchema = Schema;
