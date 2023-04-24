import { z } from 'zod';
import { TrackProduceByArtistWhereUniqueInputObjectSchema } from './TrackProduceByArtistWhereUniqueInput.schema';
import { TrackProduceByArtistCreateWithoutTrackInputObjectSchema } from './TrackProduceByArtistCreateWithoutTrackInput.schema';
import { TrackProduceByArtistUncheckedCreateWithoutTrackInputObjectSchema } from './TrackProduceByArtistUncheckedCreateWithoutTrackInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackProduceByArtistCreateOrConnectWithoutTrackInput> =
  z
    .object({
      where: z.lazy(() => TrackProduceByArtistWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => TrackProduceByArtistCreateWithoutTrackInputObjectSchema),
        z.lazy(
          () =>
            TrackProduceByArtistUncheckedCreateWithoutTrackInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TrackProduceByArtistCreateOrConnectWithoutTrackInputObjectSchema =
  Schema;
