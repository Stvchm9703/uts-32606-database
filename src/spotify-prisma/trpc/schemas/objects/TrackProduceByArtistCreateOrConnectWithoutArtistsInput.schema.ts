import { z } from 'zod';
import { TrackProduceByArtistWhereUniqueInputObjectSchema } from './TrackProduceByArtistWhereUniqueInput.schema';
import { TrackProduceByArtistCreateWithoutArtistsInputObjectSchema } from './TrackProduceByArtistCreateWithoutArtistsInput.schema';
import { TrackProduceByArtistUncheckedCreateWithoutArtistsInputObjectSchema } from './TrackProduceByArtistUncheckedCreateWithoutArtistsInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackProduceByArtistCreateOrConnectWithoutArtistsInput> =
  z
    .object({
      where: z.lazy(() => TrackProduceByArtistWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => TrackProduceByArtistCreateWithoutArtistsInputObjectSchema),
        z.lazy(
          () =>
            TrackProduceByArtistUncheckedCreateWithoutArtistsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TrackProduceByArtistCreateOrConnectWithoutArtistsInputObjectSchema =
  Schema;
