import { z } from 'zod';
import { TagCreateNestedOneWithoutTracksAvailableMarketInputObjectSchema } from './TagCreateNestedOneWithoutTracksAvailableMarketInput.schema';
import { TrackCreateNestedOneWithoutAvailableMarketsInputObjectSchema } from './TrackCreateNestedOneWithoutAvailableMarketsInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksAvailableMarketCreateInput> = z
  .object({
    Tag: z.lazy(
      () => TagCreateNestedOneWithoutTracksAvailableMarketInputObjectSchema,
    ),
    Track: z.lazy(
      () => TrackCreateNestedOneWithoutAvailableMarketsInputObjectSchema,
    ),
  })
  .strict();

export const TracksAvailableMarketCreateInputObjectSchema = Schema;
