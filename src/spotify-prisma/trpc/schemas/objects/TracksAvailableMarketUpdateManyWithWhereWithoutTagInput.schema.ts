import { z } from 'zod';
import { TracksAvailableMarketScalarWhereInputObjectSchema } from './TracksAvailableMarketScalarWhereInput.schema';
import { TracksAvailableMarketUpdateManyMutationInputObjectSchema } from './TracksAvailableMarketUpdateManyMutationInput.schema';
import { TracksAvailableMarketUncheckedUpdateManyWithoutTracksAvailableMarketInputObjectSchema } from './TracksAvailableMarketUncheckedUpdateManyWithoutTracksAvailableMarketInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksAvailableMarketUpdateManyWithWhereWithoutTagInput> =
  z
    .object({
      where: z.lazy(() => TracksAvailableMarketScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => TracksAvailableMarketUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            TracksAvailableMarketUncheckedUpdateManyWithoutTracksAvailableMarketInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TracksAvailableMarketUpdateManyWithWhereWithoutTagInputObjectSchema =
  Schema;
