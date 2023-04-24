import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksAvailableMarketUncheckedCreateWithoutTagInput> =
  z
    .object({
      trackId: z.number(),
    })
    .strict();

export const TracksAvailableMarketUncheckedCreateWithoutTagInputObjectSchema =
  Schema;
