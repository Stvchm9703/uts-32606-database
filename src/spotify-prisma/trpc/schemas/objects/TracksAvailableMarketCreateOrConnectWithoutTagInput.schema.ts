import { z } from 'zod';
import { TracksAvailableMarketWhereUniqueInputObjectSchema } from './TracksAvailableMarketWhereUniqueInput.schema';
import { TracksAvailableMarketCreateWithoutTagInputObjectSchema } from './TracksAvailableMarketCreateWithoutTagInput.schema';
import { TracksAvailableMarketUncheckedCreateWithoutTagInputObjectSchema } from './TracksAvailableMarketUncheckedCreateWithoutTagInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksAvailableMarketCreateOrConnectWithoutTagInput> =
  z
    .object({
      where: z.lazy(() => TracksAvailableMarketWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => TracksAvailableMarketCreateWithoutTagInputObjectSchema),
        z.lazy(
          () => TracksAvailableMarketUncheckedCreateWithoutTagInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TracksAvailableMarketCreateOrConnectWithoutTagInputObjectSchema =
  Schema;
