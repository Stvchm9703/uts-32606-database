import { z } from 'zod';
import { TracksAvailableMarketWhereUniqueInputObjectSchema } from './TracksAvailableMarketWhereUniqueInput.schema';
import { TracksAvailableMarketUpdateWithoutTagInputObjectSchema } from './TracksAvailableMarketUpdateWithoutTagInput.schema';
import { TracksAvailableMarketUncheckedUpdateWithoutTagInputObjectSchema } from './TracksAvailableMarketUncheckedUpdateWithoutTagInput.schema';
import { TracksAvailableMarketCreateWithoutTagInputObjectSchema } from './TracksAvailableMarketCreateWithoutTagInput.schema';
import { TracksAvailableMarketUncheckedCreateWithoutTagInputObjectSchema } from './TracksAvailableMarketUncheckedCreateWithoutTagInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksAvailableMarketUpsertWithWhereUniqueWithoutTagInput> =
  z
    .object({
      where: z.lazy(() => TracksAvailableMarketWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => TracksAvailableMarketUpdateWithoutTagInputObjectSchema),
        z.lazy(
          () => TracksAvailableMarketUncheckedUpdateWithoutTagInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => TracksAvailableMarketCreateWithoutTagInputObjectSchema),
        z.lazy(
          () => TracksAvailableMarketUncheckedCreateWithoutTagInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TracksAvailableMarketUpsertWithWhereUniqueWithoutTagInputObjectSchema =
  Schema;
