import { z } from 'zod';
import { TracksAvailableMarketWhereUniqueInputObjectSchema } from './TracksAvailableMarketWhereUniqueInput.schema';
import { TracksAvailableMarketUpdateWithoutTagInputObjectSchema } from './TracksAvailableMarketUpdateWithoutTagInput.schema';
import { TracksAvailableMarketUncheckedUpdateWithoutTagInputObjectSchema } from './TracksAvailableMarketUncheckedUpdateWithoutTagInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksAvailableMarketUpdateWithWhereUniqueWithoutTagInput> =
  z
    .object({
      where: z.lazy(() => TracksAvailableMarketWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => TracksAvailableMarketUpdateWithoutTagInputObjectSchema),
        z.lazy(
          () => TracksAvailableMarketUncheckedUpdateWithoutTagInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TracksAvailableMarketUpdateWithWhereUniqueWithoutTagInputObjectSchema =
  Schema;
