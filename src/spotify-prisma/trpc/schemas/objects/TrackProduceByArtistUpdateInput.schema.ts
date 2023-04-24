import { z } from 'zod';
import { TrackUpdateOneRequiredWithoutArtistsNestedInputObjectSchema } from './TrackUpdateOneRequiredWithoutArtistsNestedInput.schema';
import { ArtistUpdateOneRequiredWithoutTrackProduceByArtistNestedInputObjectSchema } from './ArtistUpdateOneRequiredWithoutTrackProduceByArtistNestedInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackProduceByArtistUpdateInput> = z
  .object({
    Track: z
      .lazy(() => TrackUpdateOneRequiredWithoutArtistsNestedInputObjectSchema)
      .optional(),
    Artists: z
      .lazy(
        () =>
          ArtistUpdateOneRequiredWithoutTrackProduceByArtistNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TrackProduceByArtistUpdateInputObjectSchema = Schema;
