import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
  })
  .strict();

export const PlaylistWhereUniqueInputObjectSchema = Schema;
