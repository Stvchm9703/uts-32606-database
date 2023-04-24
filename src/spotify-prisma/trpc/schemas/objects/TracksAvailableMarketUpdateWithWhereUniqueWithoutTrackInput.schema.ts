import { z } from 'zod';
import { TracksAvailableMarketWhereUniqueInputObjectSchema } from './TracksAvailableMarketWhereUniqueInput.schema';
import { TracksAvailableMarketUpdateWithoutTrackInputObjectSchema } from './TracksAvailableMarketUpdateWithoutTrackInput.schema';
import { TracksAvailableMarketUncheckedUpdateWithoutTrackInputObjectSchema } from './TracksAvailableMarketUncheckedUpdateWithoutTrackInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksAvailableMarketUpdateWithWhereUniqueWithoutTrackInput> =
  z
    .object({
      where: z.lazy(() => TracksAvailableMarketWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => TracksAvailableMarketUpdateWithoutTrackInputObjectSchema),
        z.lazy(
          () =>
            TracksAvailableMarketUncheckedUpdateWithoutTrackInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TracksAvailableMarketUpdateWithWhereUniqueWithoutTrackInputObjectSchema =
  Schema;
