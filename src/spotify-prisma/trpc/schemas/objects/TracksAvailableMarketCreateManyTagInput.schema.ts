import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksAvailableMarketCreateManyTagInput> = z
  .object({
    trackId: z.number(),
  })
  .strict();

export const TracksAvailableMarketCreateManyTagInputObjectSchema = Schema;
