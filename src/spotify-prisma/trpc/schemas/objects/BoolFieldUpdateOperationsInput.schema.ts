import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z
  .object({
    set: z.boolean().optional(),
  })
  .strict();

export const BoolFieldUpdateOperationsInputObjectSchema = Schema;
