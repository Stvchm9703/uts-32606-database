import { z } from 'zod';
import { TrackProduceByArtistCreateWithoutArtistsInputObjectSchema } from './TrackProduceByArtistCreateWithoutArtistsInput.schema';
import { TrackProduceByArtistUncheckedCreateWithoutArtistsInputObjectSchema } from './TrackProduceByArtistUncheckedCreateWithoutArtistsInput.schema';
import { TrackProduceByArtistCreateOrConnectWithoutArtistsInputObjectSchema } from './TrackProduceByArtistCreateOrConnectWithoutArtistsInput.schema';
import { TrackProduceByArtistCreateManyArtistsInputEnvelopeObjectSchema } from './TrackProduceByArtistCreateManyArtistsInputEnvelope.schema';
import { TrackProduceByArtistWhereUniqueInputObjectSchema } from './TrackProduceByArtistWhereUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackProduceByArtistUncheckedCreateNestedManyWithoutArtistsInput> =
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
      createMany: z
        .lazy(
          () => TrackProduceByArtistCreateManyArtistsInputEnvelopeObjectSchema,
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

export const TrackProduceByArtistUncheckedCreateNestedManyWithoutArtistsInputObjectSchema =
  Schema;
