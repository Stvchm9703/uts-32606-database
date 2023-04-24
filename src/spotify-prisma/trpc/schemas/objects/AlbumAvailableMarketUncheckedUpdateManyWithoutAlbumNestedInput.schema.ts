import { z } from 'zod';
import { AlbumAvailableMarketCreateWithoutAlbumInputObjectSchema } from './AlbumAvailableMarketCreateWithoutAlbumInput.schema';
import { AlbumAvailableMarketUncheckedCreateWithoutAlbumInputObjectSchema } from './AlbumAvailableMarketUncheckedCreateWithoutAlbumInput.schema';
import { AlbumAvailableMarketCreateOrConnectWithoutAlbumInputObjectSchema } from './AlbumAvailableMarketCreateOrConnectWithoutAlbumInput.schema';
import { AlbumAvailableMarketUpsertWithWhereUniqueWithoutAlbumInputObjectSchema } from './AlbumAvailableMarketUpsertWithWhereUniqueWithoutAlbumInput.schema';
import { AlbumAvailableMarketCreateManyAlbumInputEnvelopeObjectSchema } from './AlbumAvailableMarketCreateManyAlbumInputEnvelope.schema';
import { AlbumAvailableMarketWhereUniqueInputObjectSchema } from './AlbumAvailableMarketWhereUniqueInput.schema';
import { AlbumAvailableMarketUpdateWithWhereUniqueWithoutAlbumInputObjectSchema } from './AlbumAvailableMarketUpdateWithWhereUniqueWithoutAlbumInput.schema';
import { AlbumAvailableMarketUpdateManyWithWhereWithoutAlbumInputObjectSchema } from './AlbumAvailableMarketUpdateManyWithWhereWithoutAlbumInput.schema';
import { AlbumAvailableMarketScalarWhereInputObjectSchema } from './AlbumAvailableMarketScalarWhereInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumAvailableMarketUncheckedUpdateManyWithoutAlbumNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AlbumAvailableMarketCreateWithoutAlbumInputObjectSchema),
          z
            .lazy(() => AlbumAvailableMarketCreateWithoutAlbumInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              AlbumAvailableMarketUncheckedCreateWithoutAlbumInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AlbumAvailableMarketUncheckedCreateWithoutAlbumInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              AlbumAvailableMarketCreateOrConnectWithoutAlbumInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AlbumAvailableMarketCreateOrConnectWithoutAlbumInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              AlbumAvailableMarketUpsertWithWhereUniqueWithoutAlbumInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AlbumAvailableMarketUpsertWithWhereUniqueWithoutAlbumInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => AlbumAvailableMarketCreateManyAlbumInputEnvelopeObjectSchema,
        )
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
              AlbumAvailableMarketUpdateWithWhereUniqueWithoutAlbumInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AlbumAvailableMarketUpdateWithWhereUniqueWithoutAlbumInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              AlbumAvailableMarketUpdateManyWithWhereWithoutAlbumInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AlbumAvailableMarketUpdateManyWithWhereWithoutAlbumInputObjectSchema,
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

export const AlbumAvailableMarketUncheckedUpdateManyWithoutAlbumNestedInputObjectSchema =
  Schema;
