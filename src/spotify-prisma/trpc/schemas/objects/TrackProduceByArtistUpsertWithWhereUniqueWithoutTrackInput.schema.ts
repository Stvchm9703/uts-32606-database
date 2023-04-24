import { z } from 'zod';
import { TrackProduceByArtistWhereUniqueInputObjectSchema } from './TrackProduceByArtistWhereUniqueInput.schema';
import { TrackProduceByArtistUpdateWithoutTrackInputObjectSchema } from './TrackProduceByArtistUpdateWithoutTrackInput.schema';
import { TrackProduceByArtistUncheckedUpdateWithoutTrackInputObjectSchema } from './TrackProduceByArtistUncheckedUpdateWithoutTrackInput.schema';
import { TrackProduceByArtistCreateWithoutTrackInputObjectSchema } from './TrackProduceByArtistCreateWithoutTrackInput.schema';
import { TrackProduceByArtistUncheckedCreateWithoutTrackInputObjectSchema } from './TrackProduceByArtistUncheckedCreateWithoutTrackInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackProduceByArtistUpsertWithWhereUniqueWithoutTrackInput> =
  z
    .object({
      where: z.lazy(() => TrackProduceByArtistWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => TrackProduceByArtistUpdateWithoutTrackInputObjectSchema),
        z.lazy(
          () =>
            TrackProduceByArtistUncheckedUpdateWithoutTrackInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => TrackProduceByArtistCreateWithoutTrackInputObjectSchema),
        z.lazy(
          () =>
            TrackProduceByArtistUncheckedCreateWithoutTrackInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TrackProduceByArtistUpsertWithWhereUniqueWithoutTrackInputObjectSchema =
  Schema;
