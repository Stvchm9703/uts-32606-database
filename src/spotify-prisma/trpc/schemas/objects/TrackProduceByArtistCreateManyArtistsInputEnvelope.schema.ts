import { z } from 'zod';
import { TrackProduceByArtistCreateManyArtistsInputObjectSchema } from './TrackProduceByArtistCreateManyArtistsInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackProduceByArtistCreateManyArtistsInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => TrackProduceByArtistCreateManyArtistsInputObjectSchema),
        z
          .lazy(() => TrackProduceByArtistCreateManyArtistsInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const TrackProduceByArtistCreateManyArtistsInputEnvelopeObjectSchema =
  Schema;
