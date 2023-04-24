import { z } from 'zod';
import { TrackCreateNestedOneWithoutAvailableMarketsInputObjectSchema } from './TrackCreateNestedOneWithoutAvailableMarketsInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksAvailableMarketCreateWithoutTagInput> = z
  .object({
    Track: z.lazy(
      () => TrackCreateNestedOneWithoutAvailableMarketsInputObjectSchema,
    ),
  })
  .strict();

export const TracksAvailableMarketCreateWithoutTagInputObjectSchema = Schema;
