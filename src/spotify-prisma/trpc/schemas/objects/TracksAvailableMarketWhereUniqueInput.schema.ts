import { z } from 'zod';
import { TracksAvailableMarketTrackIdTagIdCompoundUniqueInputObjectSchema } from './TracksAvailableMarketTrackIdTagIdCompoundUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksAvailableMarketWhereUniqueInput> = z
  .object({
    trackId_tagId: z
      .lazy(
        () => TracksAvailableMarketTrackIdTagIdCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TracksAvailableMarketWhereUniqueInputObjectSchema = Schema;
