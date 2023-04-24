import { z } from 'zod';
import { TrackCreateNestedOneWithoutArtistsInputObjectSchema } from './TrackCreateNestedOneWithoutArtistsInput.schema';
import { ArtistCreateNestedOneWithoutTrackProduceByArtistInputObjectSchema } from './ArtistCreateNestedOneWithoutTrackProduceByArtistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackProduceByArtistCreateInput> = z
  .object({
    Track: z.lazy(() => TrackCreateNestedOneWithoutArtistsInputObjectSchema),
    Artists: z.lazy(
      () => ArtistCreateNestedOneWithoutTrackProduceByArtistInputObjectSchema,
    ),
  })
  .strict();

export const TrackProduceByArtistCreateInputObjectSchema = Schema;
