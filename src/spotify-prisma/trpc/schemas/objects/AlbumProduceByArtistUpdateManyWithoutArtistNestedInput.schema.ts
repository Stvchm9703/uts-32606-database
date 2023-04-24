import { z } from 'zod';
import { AlbumProduceByArtistCreateWithoutArtistInputObjectSchema } from './AlbumProduceByArtistCreateWithoutArtistInput.schema';
import { AlbumProduceByArtistUncheckedCreateWithoutArtistInputObjectSchema } from './AlbumProduceByArtistUncheckedCreateWithoutArtistInput.schema';
import { AlbumProduceByArtistCreateOrConnectWithoutArtistInputObjectSchema } from './AlbumProduceByArtistCreateOrConnectWithoutArtistInput.schema';
import { AlbumProduceByArtistUpsertWithWhereUniqueWithoutArtistInputObjectSchema } from './AlbumProduceByArtistUpsertWithWhereUniqueWithoutArtistInput.schema';
import { AlbumProduceByArtistCreateManyArtistInputEnvelopeObjectSchema } from './AlbumProduceByArtistCreateManyArtistInputEnvelope.schema';
import { AlbumProduceByArtistWhereUniqueInputObjectSchema } from './AlbumProduceByArtistWhereUniqueInput.schema';
import { AlbumProduceByArtistUpdateWithWhereUniqueWithoutArtistInputObjectSchema } from './AlbumProduceByArtistUpdateWithWhereUniqueWithoutArtistInput.schema';
import { AlbumProduceByArtistUpdateManyWithWhereWithoutArtistInputObjectSchema } from './AlbumProduceByArtistUpdateManyWithWhereWithoutArtistInput.schema';
import { AlbumProduceByArtistScalarWhereInputObjectSchema } from './AlbumProduceByArtistScalarWhereInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumProduceByArtistUpdateManyWithoutArtistNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => AlbumProduceByArtistCreateWithoutArtistInputObjectSchema,
          ),
          z
            .lazy(
              () => AlbumProduceByArtistCreateWithoutArtistInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              AlbumProduceByArtistUncheckedCreateWithoutArtistInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AlbumProduceByArtistUncheckedCreateWithoutArtistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              AlbumProduceByArtistCreateOrConnectWithoutArtistInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AlbumProduceByArtistCreateOrConnectWithoutArtistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              AlbumProduceByArtistUpsertWithWhereUniqueWithoutArtistInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AlbumProduceByArtistUpsertWithWhereUniqueWithoutArtistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => AlbumProduceByArtistCreateManyArtistInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => AlbumProduceByArtistWhereUniqueInputObjectSchema),
          z
            .lazy(() => AlbumProduceByArtistWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => AlbumProduceByArtistWhereUniqueInputObjectSchema),
          z
            .lazy(() => AlbumProduceByArtistWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => AlbumProduceByArtistWhereUniqueInputObjectSchema),
          z
            .lazy(() => AlbumProduceByArtistWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => AlbumProduceByArtistWhereUniqueInputObjectSchema),
          z
            .lazy(() => AlbumProduceByArtistWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              AlbumProduceByArtistUpdateWithWhereUniqueWithoutArtistInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AlbumProduceByArtistUpdateWithWhereUniqueWithoutArtistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              AlbumProduceByArtistUpdateManyWithWhereWithoutArtistInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AlbumProduceByArtistUpdateManyWithWhereWithoutArtistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => AlbumProduceByArtistScalarWhereInputObjectSchema),
          z
            .lazy(() => AlbumProduceByArtistScalarWhereInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const AlbumProduceByArtistUpdateManyWithoutArtistNestedInputObjectSchema =
  Schema;
