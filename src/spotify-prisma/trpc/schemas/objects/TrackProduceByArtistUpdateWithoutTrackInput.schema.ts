import { z } from 'zod';
import { ArtistUpdateOneRequiredWithoutTrackProduceByArtistNestedInputObjectSchema } from './ArtistUpdateOneRequiredWithoutTrackProduceByArtistNestedInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackProduceByArtistUpdateWithoutTrackInput> = z
  .object({
    Artists: z
      .lazy(
        () =>
          ArtistUpdateOneRequiredWithoutTrackProduceByArtistNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TrackProduceByArtistUpdateWithoutTrackInputObjectSchema = Schema;
