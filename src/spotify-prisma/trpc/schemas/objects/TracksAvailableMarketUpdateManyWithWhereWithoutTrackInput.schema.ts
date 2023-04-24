import { z } from 'zod';
import { TracksAvailableMarketScalarWhereInputObjectSchema } from './TracksAvailableMarketScalarWhereInput.schema';
import { TracksAvailableMarketUpdateManyMutationInputObjectSchema } from './TracksAvailableMarketUpdateManyMutationInput.schema';
import { TracksAvailableMarketUncheckedUpdateManyWithoutAvailableMarketsInputObjectSchema } from './TracksAvailableMarketUncheckedUpdateManyWithoutAvailableMarketsInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksAvailableMarketUpdateManyWithWhereWithoutTrackInput> =
  z
    .object({
      where: z.lazy(() => TracksAvailableMarketScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => TracksAvailableMarketUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            TracksAvailableMarketUncheckedUpdateManyWithoutAvailableMarketsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TracksAvailableMarketUpdateManyWithWhereWithoutTrackInputObjectSchema =
  Schema;
