import { z } from 'zod';
import { TracksAvailableMarketWhereUniqueInputObjectSchema } from './TracksAvailableMarketWhereUniqueInput.schema';
import { TracksAvailableMarketUpdateWithoutTrackInputObjectSchema } from './TracksAvailableMarketUpdateWithoutTrackInput.schema';
import { TracksAvailableMarketUncheckedUpdateWithoutTrackInputObjectSchema } from './TracksAvailableMarketUncheckedUpdateWithoutTrackInput.schema';
import { TracksAvailableMarketCreateWithoutTrackInputObjectSchema } from './TracksAvailableMarketCreateWithoutTrackInput.schema';
import { TracksAvailableMarketUncheckedCreateWithoutTrackInputObjectSchema } from './TracksAvailableMarketUncheckedCreateWithoutTrackInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksAvailableMarketUpsertWithWhereUniqueWithoutTrackInput> =
  z
    .object({
      where: z.lazy(() => TracksAvailableMarketWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => TracksAvailableMarketUpdateWithoutTrackInputObjectSchema),
        z.lazy(
          () =>
            TracksAvailableMarketUncheckedUpdateWithoutTrackInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => TracksAvailableMarketCreateWithoutTrackInputObjectSchema),
        z.lazy(
          () =>
            TracksAvailableMarketUncheckedCreateWithoutTrackInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TracksAvailableMarketUpsertWithWhereUniqueWithoutTrackInputObjectSchema =
  Schema;
