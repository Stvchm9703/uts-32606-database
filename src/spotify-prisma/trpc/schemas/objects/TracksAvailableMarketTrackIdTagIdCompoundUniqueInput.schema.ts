import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksAvailableMarketTrackIdTagIdCompoundUniqueInput> =
  z
    .object({
      trackId: z.number(),
      tagId: z.number(),
    })
    .strict();

export const TracksAvailableMarketTrackIdTagIdCompoundUniqueInputObjectSchema =
  Schema;
