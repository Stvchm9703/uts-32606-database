import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
    uid: z.string().optional(),
  })
  .strict();

export const TrackWhereUniqueInputObjectSchema = Schema;
