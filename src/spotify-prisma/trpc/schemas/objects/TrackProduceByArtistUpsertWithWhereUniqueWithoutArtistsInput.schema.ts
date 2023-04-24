import { z } from 'zod';
import { TrackProduceByArtistWhereUniqueInputObjectSchema } from './TrackProduceByArtistWhereUniqueInput.schema';
import { TrackProduceByArtistUpdateWithoutArtistsInputObjectSchema } from './TrackProduceByArtistUpdateWithoutArtistsInput.schema';
import { TrackProduceByArtistUncheckedUpdateWithoutArtistsInputObjectSchema } from './TrackProduceByArtistUncheckedUpdateWithoutArtistsInput.schema';
import { TrackProduceByArtistCreateWithoutArtistsInputObjectSchema } from './TrackProduceByArtistCreateWithoutArtistsInput.schema';
import { TrackProduceByArtistUncheckedCreateWithoutArtistsInputObjectSchema } from './TrackProduceByArtistUncheckedCreateWithoutArtistsInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackProduceByArtistUpsertWithWhereUniqueWithoutArtistsInput> =
  z
    .object({
      where: z.lazy(() => TrackProduceByArtistWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => TrackProduceByArtistUpdateWithoutArtistsInputObjectSchema),
        z.lazy(
          () =>
            TrackProduceByArtistUncheckedUpdateWithoutArtistsInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => TrackProduceByArtistCreateWithoutArtistsInputObjectSchema),
        z.lazy(
          () =>
            TrackProduceByArtistUncheckedCreateWithoutArtistsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TrackProduceByArtistUpsertWithWhereUniqueWithoutArtistsInputObjectSchema =
  Schema;
