import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TagCreateManyInput> = z
  .object({
    id: z.number().optional(),
    code: z.string(),
    type: z.string(),
    name: z.string(),
  })
  .strict();

export const TagCreateManyInputObjectSchema = Schema;
