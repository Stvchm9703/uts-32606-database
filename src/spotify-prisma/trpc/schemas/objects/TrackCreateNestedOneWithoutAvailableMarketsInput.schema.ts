import { z } from 'zod';
import { TrackCreateWithoutAvailableMarketsInputObjectSchema } from './TrackCreateWithoutAvailableMarketsInput.schema';
import { TrackUncheckedCreateWithoutAvailableMarketsInputObjectSchema } from './TrackUncheckedCreateWithoutAvailableMarketsInput.schema';
import { TrackCreateOrConnectWithoutAvailableMarketsInputObjectSchema } from './TrackCreateOrConnectWithoutAvailableMarketsInput.schema';
import { TrackWhereUniqueInputObjectSchema } from './TrackWhereUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackCreateNestedOneWithoutAvailableMarketsInput> =
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
      connect: z.lazy(() => TrackWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const TrackCreateNestedOneWithoutAvailableMarketsInputObjectSchema =
  Schema;
