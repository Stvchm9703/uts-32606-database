import { z } from 'zod';
import { AlbumProduceByArtistCreateWithoutAlbumInputObjectSchema } from './AlbumProduceByArtistCreateWithoutAlbumInput.schema';
import { AlbumProduceByArtistUncheckedCreateWithoutAlbumInputObjectSchema } from './AlbumProduceByArtistUncheckedCreateWithoutAlbumInput.schema';
import { AlbumProduceByArtistCreateOrConnectWithoutAlbumInputObjectSchema } from './AlbumProduceByArtistCreateOrConnectWithoutAlbumInput.schema';
import { AlbumProduceByArtistUpsertWithWhereUniqueWithoutAlbumInputObjectSchema } from './AlbumProduceByArtistUpsertWithWhereUniqueWithoutAlbumInput.schema';
import { AlbumProduceByArtistCreateManyAlbumInputEnvelopeObjectSchema } from './AlbumProduceByArtistCreateManyAlbumInputEnvelope.schema';
import { AlbumProduceByArtistWhereUniqueInputObjectSchema } from './AlbumProduceByArtistWhereUniqueInput.schema';
import { AlbumProduceByArtistUpdateWithWhereUniqueWithoutAlbumInputObjectSchema } from './AlbumProduceByArtistUpdateWithWhereUniqueWithoutAlbumInput.schema';
import { AlbumProduceByArtistUpdateManyWithWhereWithoutAlbumInputObjectSchema } from './AlbumProduceByArtistUpdateManyWithWhereWithoutAlbumInput.schema';
import { AlbumProduceByArtistScalarWhereInputObjectSchema } from './AlbumProduceByArtistScalarWhereInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumProduceByArtistUpdateManyWithoutAlbumNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AlbumProduceByArtistCreateWithoutAlbumInputObjectSchema),
          z
            .lazy(() => AlbumProduceByArtistCreateWithoutAlbumInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              AlbumProduceByArtistUncheckedCreateWithoutAlbumInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AlbumProduceByArtistUncheckedCreateWithoutAlbumInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              AlbumProduceByArtistCreateOrConnectWithoutAlbumInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AlbumProduceByArtistCreateOrConnectWithoutAlbumInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              AlbumProduceByArtistUpsertWithWhereUniqueWithoutAlbumInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AlbumProduceByArtistUpsertWithWhereUniqueWithoutAlbumInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => AlbumProduceByArtistCreateManyAlbumInputEnvelopeObjectSchema,
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
              AlbumProduceByArtistUpdateWithWhereUniqueWithoutAlbumInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AlbumProduceByArtistUpdateWithWhereUniqueWithoutAlbumInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              AlbumProduceByArtistUpdateManyWithWhereWithoutAlbumInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AlbumProduceByArtistUpdateManyWithWhereWithoutAlbumInputObjectSchema,
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

export const AlbumProduceByArtistUpdateManyWithoutAlbumNestedInputObjectSchema =
  Schema;
