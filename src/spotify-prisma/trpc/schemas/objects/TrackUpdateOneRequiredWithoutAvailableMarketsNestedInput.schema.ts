import { z } from 'zod';
import { TrackCreateWithoutAvailableMarketsInputObjectSchema } from './TrackCreateWithoutAvailableMarketsInput.schema';
import { TrackUncheckedCreateWithoutAvailableMarketsInputObjectSchema } from './TrackUncheckedCreateWithoutAvailableMarketsInput.schema';
import { TrackCreateOrConnectWithoutAvailableMarketsInputObjectSchema } from './TrackCreateOrConnectWithoutAvailableMarketsInput.schema';
import { TrackUpsertWithoutAvailableMarketsInputObjectSchema } from './TrackUpsertWithoutAvailableMarketsInput.schema';
import { TrackWhereUniqueInputObjectSchema } from './TrackWhereUniqueInput.schema';
import { TrackUpdateWithoutAvailableMarketsInputObjectSchema } from './TrackUpdateWithoutAvailableMarketsInput.schema';
import { TrackUncheckedUpdateWithoutAvailableMarketsInputObjectSchema } from './TrackUncheckedUpdateWithoutAvailableMarketsInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackUpdateOneRequiredWithoutAvailableMarketsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TrackCreateWithoutAvailableMarketsInputObjectSchema),
          z.lazy(
            () => TrackUncheckedCreateWithoutAvailableMarketsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => TrackCreateOrConnectWithoutAvailableMarketsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => TrackUpsertWithoutAvailableMarketsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => TrackWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => TrackUpdateWithoutAvailableMarketsInputObjectSchema),
          z.lazy(
            () => TrackUncheckedUpdateWithoutAvailableMarketsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const TrackUpdateOneRequiredWithoutAvailableMarketsNestedInputObjectSchema =
  Schema;
