import { z } from 'zod';
import { TracksAvailableMarketCreateWithoutTrackInputObjectSchema } from './TracksAvailableMarketCreateWithoutTrackInput.schema';
import { TracksAvailableMarketUncheckedCreateWithoutTrackInputObjectSchema } from './TracksAvailableMarketUncheckedCreateWithoutTrackInput.schema';
import { TracksAvailableMarketCreateOrConnectWithoutTrackInputObjectSchema } from './TracksAvailableMarketCreateOrConnectWithoutTrackInput.schema';
import { TracksAvailableMarketUpsertWithWhereUniqueWithoutTrackInputObjectSchema } from './TracksAvailableMarketUpsertWithWhereUniqueWithoutTrackInput.schema';
import { TracksAvailableMarketCreateManyTrackInputEnvelopeObjectSchema } from './TracksAvailableMarketCreateManyTrackInputEnvelope.schema';
import { TracksAvailableMarketWhereUniqueInputObjectSchema } from './TracksAvailableMarketWhereUniqueInput.schema';
import { TracksAvailableMarketUpdateWithWhereUniqueWithoutTrackInputObjectSchema } from './TracksAvailableMarketUpdateWithWhereUniqueWithoutTrackInput.schema';
import { TracksAvailableMarketUpdateManyWithWhereWithoutTrackInputObjectSchema } from './TracksAvailableMarketUpdateManyWithWhereWithoutTrackInput.schema';
import { TracksAvailableMarketScalarWhereInputObjectSchema } from './TracksAvailableMarketScalarWhereInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksAvailableMarketUpdateManyWithoutTrackNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              TracksAvailableMarketUpsertWithWhereUniqueWithoutTrackInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TracksAvailableMarketUpsertWithWhereUniqueWithoutTrackInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => TracksAvailableMarketCreateManyTrackInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => TracksAvailableMarketWhereUniqueInputObjectSchema),
          z
            .lazy(() => TracksAvailableMarketWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => TracksAvailableMarketWhereUniqueInputObjectSchema),
          z
            .lazy(() => TracksAvailableMarketWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => TracksAvailableMarketWhereUniqueInputObjectSchema),
          z
            .lazy(() => TracksAvailableMarketWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => TracksAvailableMarketWhereUniqueInputObjectSchema),
          z
            .lazy(() => TracksAvailableMarketWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              TracksAvailableMarketUpdateWithWhereUniqueWithoutTrackInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TracksAvailableMarketUpdateWithWhereUniqueWithoutTrackInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              TracksAvailableMarketUpdateManyWithWhereWithoutTrackInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TracksAvailableMarketUpdateManyWithWhereWithoutTrackInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => TracksAvailableMarketScalarWhereInputObjectSchema),
          z
            .lazy(() => TracksAvailableMarketScalarWhereInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const TracksAvailableMarketUpdateManyWithoutTrackNestedInputObjectSchema =
  Schema;
