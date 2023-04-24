import { z } from 'zod';
import { TrackProduceByArtistCreateWithoutTrackInputObjectSchema } from './TrackProduceByArtistCreateWithoutTrackInput.schema';
import { TrackProduceByArtistUncheckedCreateWithoutTrackInputObjectSchema } from './TrackProduceByArtistUncheckedCreateWithoutTrackInput.schema';
import { TrackProduceByArtistCreateOrConnectWithoutTrackInputObjectSchema } from './TrackProduceByArtistCreateOrConnectWithoutTrackInput.schema';
import { TrackProduceByArtistUpsertWithWhereUniqueWithoutTrackInputObjectSchema } from './TrackProduceByArtistUpsertWithWhereUniqueWithoutTrackInput.schema';
import { TrackProduceByArtistCreateManyTrackInputEnvelopeObjectSchema } from './TrackProduceByArtistCreateManyTrackInputEnvelope.schema';
import { TrackProduceByArtistWhereUniqueInputObjectSchema } from './TrackProduceByArtistWhereUniqueInput.schema';
import { TrackProduceByArtistUpdateWithWhereUniqueWithoutTrackInputObjectSchema } from './TrackProduceByArtistUpdateWithWhereUniqueWithoutTrackInput.schema';
import { TrackProduceByArtistUpdateManyWithWhereWithoutTrackInputObjectSchema } from './TrackProduceByArtistUpdateManyWithWhereWithoutTrackInput.schema';
import { TrackProduceByArtistScalarWhereInputObjectSchema } from './TrackProduceByArtistScalarWhereInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackProduceByArtistUncheckedUpdateManyWithoutTrackNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TrackProduceByArtistCreateWithoutTrackInputObjectSchema),
          z
            .lazy(() => TrackProduceByArtistCreateWithoutTrackInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              TrackProduceByArtistUncheckedCreateWithoutTrackInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TrackProduceByArtistUncheckedCreateWithoutTrackInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              TrackProduceByArtistCreateOrConnectWithoutTrackInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TrackProduceByArtistCreateOrConnectWithoutTrackInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              TrackProduceByArtistUpsertWithWhereUniqueWithoutTrackInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TrackProduceByArtistUpsertWithWhereUniqueWithoutTrackInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => TrackProduceByArtistCreateManyTrackInputEnvelopeObjectSchema,
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
              TrackProduceByArtistUpdateWithWhereUniqueWithoutTrackInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TrackProduceByArtistUpdateWithWhereUniqueWithoutTrackInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              TrackProduceByArtistUpdateManyWithWhereWithoutTrackInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TrackProduceByArtistUpdateManyWithWhereWithoutTrackInputObjectSchema,
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

export const TrackProduceByArtistUncheckedUpdateManyWithoutTrackNestedInputObjectSchema =
  Schema;
