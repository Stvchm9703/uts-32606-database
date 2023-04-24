import { z } from 'zod';
import { TrackProduceByArtistScalarWhereInputObjectSchema } from './TrackProduceByArtistScalarWhereInput.schema';
import { TrackProduceByArtistUpdateManyMutationInputObjectSchema } from './TrackProduceByArtistUpdateManyMutationInput.schema';
import { TrackProduceByArtistUncheckedUpdateManyWithoutTrackProduceByArtistInputObjectSchema } from './TrackProduceByArtistUncheckedUpdateManyWithoutTrackProduceByArtistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackProduceByArtistUpdateManyWithWhereWithoutArtistsInput> =
  z
    .object({
      where: z.lazy(() => TrackProduceByArtistScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => TrackProduceByArtistUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            TrackProduceByArtistUncheckedUpdateManyWithoutTrackProduceByArtistInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TrackProduceByArtistUpdateManyWithWhereWithoutArtistsInputObjectSchema =
  Schema;
