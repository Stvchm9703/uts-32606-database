import { z } from 'zod';
import { TrackProduceByArtistCreateWithoutArtistsInputObjectSchema } from './TrackProduceByArtistCreateWithoutArtistsInput.schema';
import { TrackProduceByArtistUncheckedCreateWithoutArtistsInputObjectSchema } from './TrackProduceByArtistUncheckedCreateWithoutArtistsInput.schema';
import { TrackProduceByArtistCreateOrConnectWithoutArtistsInputObjectSchema } from './TrackProduceByArtistCreateOrConnectWithoutArtistsInput.schema';
import { TrackProduceByArtistUpsertWithWhereUniqueWithoutArtistsInputObjectSchema } from './TrackProduceByArtistUpsertWithWhereUniqueWithoutArtistsInput.schema';
import { TrackProduceByArtistCreateManyArtistsInputEnvelopeObjectSchema } from './TrackProduceByArtistCreateManyArtistsInputEnvelope.schema';
import { TrackProduceByArtistWhereUniqueInputObjectSchema } from './TrackProduceByArtistWhereUniqueInput.schema';
import { TrackProduceByArtistUpdateWithWhereUniqueWithoutArtistsInputObjectSchema } from './TrackProduceByArtistUpdateWithWhereUniqueWithoutArtistsInput.schema';
import { TrackProduceByArtistUpdateManyWithWhereWithoutArtistsInputObjectSchema } from './TrackProduceByArtistUpdateManyWithWhereWithoutArtistsInput.schema';
import { TrackProduceByArtistScalarWhereInputObjectSchema } from './TrackProduceByArtistScalarWhereInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackProduceByArtistUncheckedUpdateManyWithoutArtistsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => TrackProduceByArtistCreateWithoutArtistsInputObjectSchema,
          ),
          z
            .lazy(
              () => TrackProduceByArtistCreateWithoutArtistsInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              TrackProduceByArtistUncheckedCreateWithoutArtistsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TrackProduceByArtistUncheckedCreateWithoutArtistsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              TrackProduceByArtistCreateOrConnectWithoutArtistsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TrackProduceByArtistCreateOrConnectWithoutArtistsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              TrackProduceByArtistUpsertWithWhereUniqueWithoutArtistsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TrackProduceByArtistUpsertWithWhereUniqueWithoutArtistsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => TrackProduceByArtistCreateManyArtistsInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => TrackProduceByArtistWhereUniqueInputObjectSchema),
          z
            .lazy(() => TrackProduceByArtistWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => TrackProduceByArtistWhereUniqueInputObjectSchema),
          z
            .lazy(() => TrackProduceByArtistWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => TrackProduceByArtistWhereUniqueInputObjectSchema),
          z
            .lazy(() => TrackProduceByArtistWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => TrackProduceByArtistWhereUniqueInputObjectSchema),
          z
            .lazy(() => TrackProduceByArtistWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              TrackProduceByArtistUpdateWithWhereUniqueWithoutArtistsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TrackProduceByArtistUpdateWithWhereUniqueWithoutArtistsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              TrackProduceByArtistUpdateManyWithWhereWithoutArtistsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TrackProduceByArtistUpdateManyWithWhereWithoutArtistsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => TrackProduceByArtistScalarWhereInputObjectSchema),
          z
            .lazy(() => TrackProduceByArtistScalarWhereInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const TrackProduceByArtistUncheckedUpdateManyWithoutArtistsNestedInputObjectSchema =
  Schema;
