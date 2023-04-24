import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.UserWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
  })
  .strict();

export const UserWhereUniqueInputObjectSchema = Schema;
