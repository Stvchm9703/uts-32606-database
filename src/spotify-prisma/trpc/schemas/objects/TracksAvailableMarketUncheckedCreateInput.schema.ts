import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksAvailableMarketUncheckedCreateInput> = z
  .object({
    tagId: z.number(),
    trackId: z.number(),
  })
  .strict();

export const TracksAvailableMarketUncheckedCreateInputObjectSchema = Schema;
