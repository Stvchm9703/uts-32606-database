import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksAvailableMarketUncheckedCreateWithoutTrackInput> =
  z
    .object({
      tagId: z.number(),
    })
    .strict();

export const TracksAvailableMarketUncheckedCreateWithoutTrackInputObjectSchema =
  Schema;
