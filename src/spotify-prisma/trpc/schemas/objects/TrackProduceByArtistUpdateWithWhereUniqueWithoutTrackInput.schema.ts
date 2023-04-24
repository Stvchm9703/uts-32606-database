import { z } from 'zod';
import { TrackProduceByArtistWhereUniqueInputObjectSchema } from './TrackProduceByArtistWhereUniqueInput.schema';
import { TrackProduceByArtistUpdateWithoutTrackInputObjectSchema } from './TrackProduceByArtistUpdateWithoutTrackInput.schema';
import { TrackProduceByArtistUncheckedUpdateWithoutTrackInputObjectSchema } from './TrackProduceByArtistUncheckedUpdateWithoutTrackInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackProduceByArtistUpdateWithWhereUniqueWithoutTrackInput> =
  z
    .object({
      where: z.lazy(() => TrackProduceByArtistWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => TrackProduceByArtistUpdateWithoutTrackInputObjectSchema),
        z.lazy(
          () =>
            TrackProduceByArtistUncheckedUpdateWithoutTrackInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TrackProduceByArtistUpdateWithWhereUniqueWithoutTrackInputObjectSchema =
  Schema;
