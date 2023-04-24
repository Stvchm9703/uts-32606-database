import { z } from 'zod';
import { TrackProduceByArtistScalarWhereInputObjectSchema } from './TrackProduceByArtistScalarWhereInput.schema';
import { TrackProduceByArtistUpdateManyMutationInputObjectSchema } from './TrackProduceByArtistUpdateManyMutationInput.schema';
import { TrackProduceByArtistUncheckedUpdateManyWithoutArtistsInputObjectSchema } from './TrackProduceByArtistUncheckedUpdateManyWithoutArtistsInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackProduceByArtistUpdateManyWithWhereWithoutTrackInput> =
  z
    .object({
      where: z.lazy(() => TrackProduceByArtistScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => TrackProduceByArtistUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            TrackProduceByArtistUncheckedUpdateManyWithoutArtistsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TrackProduceByArtistUpdateManyWithWhereWithoutTrackInputObjectSchema =
  Schema;
