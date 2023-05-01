import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackMetaWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
    uid: z.string().optional(),
  })
  .strict();

export const TrackMetaWhereUniqueInputObjectSchema = Schema;