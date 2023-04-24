import { z } from 'zod';
import { TracksAvailableMarketWhereUniqueInputObjectSchema } from './TracksAvailableMarketWhereUniqueInput.schema';
import { TracksAvailableMarketCreateWithoutTrackInputObjectSchema } from './TracksAvailableMarketCreateWithoutTrackInput.schema';
import { TracksAvailableMarketUncheckedCreateWithoutTrackInputObjectSchema } from './TracksAvailableMarketUncheckedCreateWithoutTrackInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksAvailableMarketCreateOrConnectWithoutTrackInput> =
  z
    .object({
      where: z.lazy(() => TracksAvailableMarketWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => TracksAvailableMarketCreateWithoutTrackInputObjectSchema),
        z.lazy(
          () =>
            TracksAvailableMarketUncheckedCreateWithoutTrackInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TracksAvailableMarketCreateOrConnectWithoutTrackInputObjectSchema =
  Schema;
