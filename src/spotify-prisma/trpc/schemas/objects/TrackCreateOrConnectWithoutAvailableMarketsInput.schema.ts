import { z } from 'zod';
import { TrackWhereUniqueInputObjectSchema } from './TrackWhereUniqueInput.schema';
import { TrackCreateWithoutAvailableMarketsInputObjectSchema } from './TrackCreateWithoutAvailableMarketsInput.schema';
import { TrackUncheckedCreateWithoutAvailableMarketsInputObjectSchema } from './TrackUncheckedCreateWithoutAvailableMarketsInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackCreateOrConnectWithoutAvailableMarketsInput> =
  z
    .object({
      where: z.lazy(() => TrackWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => TrackCreateWithoutAvailableMarketsInputObjectSchema),
        z.lazy(
          () => TrackUncheckedCreateWithoutAvailableMarketsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TrackCreateOrConnectWithoutAvailableMarketsInputObjectSchema =
  Schema;
