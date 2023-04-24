import { z } from 'zod';
import { TrackUpdateOneRequiredWithoutArtistsNestedInputObjectSchema } from './TrackUpdateOneRequiredWithoutArtistsNestedInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackProduceByArtistUpdateWithoutArtistsInput> =
  z
    .object({
      Track: z
        .lazy(() => TrackUpdateOneRequiredWithoutArtistsNestedInputObjectSchema)
        .optional(),
    })
    .strict();

export const TrackProduceByArtistUpdateWithoutArtistsInputObjectSchema = Schema;
