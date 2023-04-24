import { z } from 'zod';
import { AlbumAvailableMarketCreateWithoutTagInputObjectSchema } from './AlbumAvailableMarketCreateWithoutTagInput.schema';
import { AlbumAvailableMarketUncheckedCreateWithoutTagInputObjectSchema } from './AlbumAvailableMarketUncheckedCreateWithoutTagInput.schema';
import { AlbumAvailableMarketCreateOrConnectWithoutTagInputObjectSchema } from './AlbumAvailableMarketCreateOrConnectWithoutTagInput.schema';
import { AlbumAvailableMarketUpsertWithWhereUniqueWithoutTagInputObjectSchema } from './AlbumAvailableMarketUpsertWithWhereUniqueWithoutTagInput.schema';
import { AlbumAvailableMarketCreateManyTagInputEnvelopeObjectSchema } from './AlbumAvailableMarketCreateManyTagInputEnvelope.schema';
import { AlbumAvailableMarketWhereUniqueInputObjectSchema } from './AlbumAvailableMarketWhereUniqueInput.schema';
import { AlbumAvailableMarketUpdateWithWhereUniqueWithoutTagInputObjectSchema } from './AlbumAvailableMarketUpdateWithWhereUniqueWithoutTagInput.schema';
import { AlbumAvailableMarketUpdateManyWithWhereWithoutTagInputObjectSchema } from './AlbumAvailableMarketUpdateManyWithWhereWithoutTagInput.schema';
import { AlbumAvailableMarketScalarWhereInputObjectSchema } from './AlbumAvailableMarketScalarWhereInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumAvailableMarketUpdateManyWithoutTagNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AlbumAvailableMarketCreateWithoutTagInputObjectSchema),
          z
            .lazy(() => AlbumAvailableMarketCreateWithoutTagInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              AlbumAvailableMarketUncheckedCreateWithoutTagInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AlbumAvailableMarketUncheckedCreateWithoutTagInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              AlbumAvailableMarketCreateOrConnectWithoutTagInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AlbumAvailableMarketCreateOrConnectWithoutTagInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              AlbumAvailableMarketUpsertWithWhereUniqueWithoutTagInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AlbumAvailableMarketUpsertWithWhereUniqueWithoutTagInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => AlbumAvailableMarketCreateManyTagInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => AlbumAvailableMarketWhereUniqueInputObjectSchema),
          z
            .lazy(() => AlbumAvailableMarketWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => AlbumAvailableMarketWhereUniqueInputObjectSchema),
          z
            .lazy(() => AlbumAvailableMarketWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => AlbumAvailableMarketWhereUniqueInputObjectSchema),
          z
            .lazy(() => AlbumAvailableMarketWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => AlbumAvailableMarketWhereUniqueInputObjectSchema),
          z
            .lazy(() => AlbumAvailableMarketWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              AlbumAvailableMarketUpdateWithWhereUniqueWithoutTagInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AlbumAvailableMarketUpdateWithWhereUniqueWithoutTagInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              AlbumAvailableMarketUpdateManyWithWhereWithoutTagInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AlbumAvailableMarketUpdateManyWithWhereWithoutTagInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => AlbumAvailableMarketScalarWhereInputObjectSchema),
          z
            .lazy(() => AlbumAvailableMarketScalarWhereInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const AlbumAvailableMarketUpdateManyWithoutTagNestedInputObjectSchema =
  Schema;
