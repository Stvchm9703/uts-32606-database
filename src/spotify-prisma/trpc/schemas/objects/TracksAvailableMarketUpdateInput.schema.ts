import { z } from 'zod';
import { TagUpdateOneRequiredWithoutTracksAvailableMarketNestedInputObjectSchema } from './TagUpdateOneRequiredWithoutTracksAvailableMarketNestedInput.schema';
import { TrackUpdateOneRequiredWithoutAvailableMarketsNestedInputObjectSchema } from './TrackUpdateOneRequiredWithoutAvailableMarketsNestedInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksAvailableMarketUpdateInput> = z
  .object({
    Tag: z
      .lazy(
        () =>
          TagUpdateOneRequiredWithoutTracksAvailableMarketNestedInputObjectSchema,
      )
      .optional(),
    Track: z
      .lazy(
        () =>
          TrackUpdateOneRequiredWithoutAvailableMarketsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TracksAvailableMarketUpdateInputObjectSchema = Schema;
