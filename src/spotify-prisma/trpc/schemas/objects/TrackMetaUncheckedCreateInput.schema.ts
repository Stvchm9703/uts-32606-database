import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackMetaUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    uid: z.string(),
    durationMs: z.number(),
  })
  .strict();

export const TrackMetaUncheckedCreateInputObjectSchema = Schema;
