import { z } from 'zod';
import { TrackProduceByArtistCreateWithoutTrackInputObjectSchema } from './TrackProduceByArtistCreateWithoutTrackInput.schema';
import { TrackProduceByArtistUncheckedCreateWithoutTrackInputObjectSchema } from './TrackProduceByArtistUncheckedCreateWithoutTrackInput.schema';
import { TrackProduceByArtistCreateOrConnectWithoutTrackInputObjectSchema } from './TrackProduceByArtistCreateOrConnectWithoutTrackInput.schema';
import { TrackProduceByArtistCreateManyTrackInputEnvelopeObjectSchema } from './TrackProduceByArtistCreateManyTrackInputEnvelope.schema';
import { TrackProduceByArtistWhereUniqueInputObjectSchema } from './TrackProduceByArtistWhereUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackProduceByArtistUncheckedCreateNestedManyWithoutTrackInput> =
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
      createMany: z
        .lazy(
          () => TrackProduceByArtistCreateManyTrackInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => TrackProduceByArtistWhereUniqueInputObjectSchema),
          z
            .lazy(() => TrackProduceByArtistWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const TrackProduceByArtistUncheckedCreateNestedManyWithoutTrackInputObjectSchema =
  Schema;
