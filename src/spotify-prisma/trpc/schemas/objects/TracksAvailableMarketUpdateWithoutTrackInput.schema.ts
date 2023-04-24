import { z } from 'zod';
import { TagUpdateOneRequiredWithoutTracksAvailableMarketNestedInputObjectSchema } from './TagUpdateOneRequiredWithoutTracksAvailableMarketNestedInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksAvailableMarketUpdateWithoutTrackInput> = z
  .object({
    Tag: z
      .lazy(
        () =>
          TagUpdateOneRequiredWithoutTracksAvailableMarketNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TracksAvailableMarketUpdateWithoutTrackInputObjectSchema = Schema;
