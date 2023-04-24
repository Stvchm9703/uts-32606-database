import { z } from 'zod';
import { TracksAvailableMarketCreateWithoutTrackInputObjectSchema } from './TracksAvailableMarketCreateWithoutTrackInput.schema';
import { TracksAvailableMarketUncheckedCreateWithoutTrackInputObjectSchema } from './TracksAvailableMarketUncheckedCreateWithoutTrackInput.schema';
import { TracksAvailableMarketCreateOrConnectWithoutTrackInputObjectSchema } from './TracksAvailableMarketCreateOrConnectWithoutTrackInput.schema';
import { TracksAvailableMarketCreateManyTrackInputEnvelopeObjectSchema } from './TracksAvailableMarketCreateManyTrackInputEnvelope.schema';
import { TracksAvailableMarketWhereUniqueInputObjectSchema } from './TracksAvailableMarketWhereUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksAvailableMarketCreateNestedManyWithoutTrackInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => TracksAvailableMarketCreateWithoutTrackInputObjectSchema,
          ),
          z
            .lazy(
              () => TracksAvailableMarketCreateWithoutTrackInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              TracksAvailableMarketUncheckedCreateWithoutTrackInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TracksAvailableMarketUncheckedCreateWithoutTrackInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              TracksAvailableMarketCreateOrConnectWithoutTrackInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TracksAvailableMarketCreateOrConnectWithoutTrackInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => TracksAvailableMarketCreateManyTrackInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => TracksAvailableMarketWhereUniqueInputObjectSchema),
          z
            .lazy(() => TracksAvailableMarketWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const TracksAvailableMarketCreateNestedManyWithoutTrackInputObjectSchema =
  Schema;
