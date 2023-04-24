import { z } from 'zod';
import { TrackUpdateWithoutAvailableMarketsInputObjectSchema } from './TrackUpdateWithoutAvailableMarketsInput.schema';
import { TrackUncheckedUpdateWithoutAvailableMarketsInputObjectSchema } from './TrackUncheckedUpdateWithoutAvailableMarketsInput.schema';
import { TrackCreateWithoutAvailableMarketsInputObjectSchema } from './TrackCreateWithoutAvailableMarketsInput.schema';
import { TrackUncheckedCreateWithoutAvailableMarketsInputObjectSchema } from './TrackUncheckedCreateWithoutAvailableMarketsInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackUpsertWithoutAvailableMarketsInput> = z
  .object({
    update: z.union([
      z.lazy(() => TrackUpdateWithoutAvailableMarketsInputObjectSchema),
      z.lazy(
        () => TrackUncheckedUpdateWithoutAvailableMarketsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => TrackCreateWithoutAvailableMarketsInputObjectSchema),
      z.lazy(
        () => TrackUncheckedCreateWithoutAvailableMarketsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const TrackUpsertWithoutAvailableMarketsInputObjectSchema = Schema;
