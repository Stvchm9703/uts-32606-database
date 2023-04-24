import { z } from 'zod';
import { TracksAvailableMarketCreateWithoutTagInputObjectSchema } from './TracksAvailableMarketCreateWithoutTagInput.schema';
import { TracksAvailableMarketUncheckedCreateWithoutTagInputObjectSchema } from './TracksAvailableMarketUncheckedCreateWithoutTagInput.schema';
import { TracksAvailableMarketCreateOrConnectWithoutTagInputObjectSchema } from './TracksAvailableMarketCreateOrConnectWithoutTagInput.schema';
import { TracksAvailableMarketUpsertWithWhereUniqueWithoutTagInputObjectSchema } from './TracksAvailableMarketUpsertWithWhereUniqueWithoutTagInput.schema';
import { TracksAvailableMarketCreateManyTagInputEnvelopeObjectSchema } from './TracksAvailableMarketCreateManyTagInputEnvelope.schema';
import { TracksAvailableMarketWhereUniqueInputObjectSchema } from './TracksAvailableMarketWhereUniqueInput.schema';
import { TracksAvailableMarketUpdateWithWhereUniqueWithoutTagInputObjectSchema } from './TracksAvailableMarketUpdateWithWhereUniqueWithoutTagInput.schema';
import { TracksAvailableMarketUpdateManyWithWhereWithoutTagInputObjectSchema } from './TracksAvailableMarketUpdateManyWithWhereWithoutTagInput.schema';
import { TracksAvailableMarketScalarWhereInputObjectSchema } from './TracksAvailableMarketScalarWhereInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksAvailableMarketUncheckedUpdateManyWithoutTagNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TracksAvailableMarketCreateWithoutTagInputObjectSchema),
          z
            .lazy(() => TracksAvailableMarketCreateWithoutTagInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              TracksAvailableMarketUncheckedCreateWithoutTagInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TracksAvailableMarketUncheckedCreateWithoutTagInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              TracksAvailableMarketCreateOrConnectWithoutTagInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TracksAvailableMarketCreateOrConnectWithoutTagInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              TracksAvailableMarketUpsertWithWhereUniqueWithoutTagInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TracksAvailableMarketUpsertWithWhereUniqueWithoutTagInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TracksAvailableMarketCreateManyTagInputEnvelopeObjectSchema)
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
              TracksAvailableMarketUpdateWithWhereUniqueWithoutTagInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TracksAvailableMarketUpdateWithWhereUniqueWithoutTagInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              TracksAvailableMarketUpdateManyWithWhereWithoutTagInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TracksAvailableMarketUpdateManyWithWhereWithoutTagInputObjectSchema,
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

export const TracksAvailableMarketUncheckedUpdateManyWithoutTagNestedInputObjectSchema =
  Schema;
