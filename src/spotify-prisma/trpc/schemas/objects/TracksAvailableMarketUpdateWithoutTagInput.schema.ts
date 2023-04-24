import { z } from 'zod';
import { TrackUpdateOneRequiredWithoutAvailableMarketsNestedInputObjectSchema } from './TrackUpdateOneRequiredWithoutAvailableMarketsNestedInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksAvailableMarketUpdateWithoutTagInput> = z
  .object({
    Track: z
      .lazy(
        () =>
          TrackUpdateOneRequiredWithoutAvailableMarketsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TracksAvailableMarketUpdateWithoutTagInputObjectSchema = Schema;
