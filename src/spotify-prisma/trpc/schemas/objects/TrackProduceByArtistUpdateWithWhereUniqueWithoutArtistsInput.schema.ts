import { z } from 'zod';
import { TrackProduceByArtistWhereUniqueInputObjectSchema } from './TrackProduceByArtistWhereUniqueInput.schema';
import { TrackProduceByArtistUpdateWithoutArtistsInputObjectSchema } from './TrackProduceByArtistUpdateWithoutArtistsInput.schema';
import { TrackProduceByArtistUncheckedUpdateWithoutArtistsInputObjectSchema } from './TrackProduceByArtistUncheckedUpdateWithoutArtistsInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackProduceByArtistUpdateWithWhereUniqueWithoutArtistsInput> =
  z
    .object({
      where: z.lazy(() => TrackProduceByArtistWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => TrackProduceByArtistUpdateWithoutArtistsInputObjectSchema),
        z.lazy(
          () =>
            TrackProduceByArtistUncheckedUpdateWithoutArtistsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TrackProduceByArtistUpdateWithWhereUniqueWithoutArtistsInputObjectSchema =
  Schema;
