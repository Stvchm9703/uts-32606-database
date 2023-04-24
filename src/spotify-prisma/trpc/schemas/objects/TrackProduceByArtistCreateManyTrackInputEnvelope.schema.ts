import { z } from 'zod';
import { TrackProduceByArtistCreateManyTrackInputObjectSchema } from './TrackProduceByArtistCreateManyTrackInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackProduceByArtistCreateManyTrackInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => TrackProduceByArtistCreateManyTrackInputObjectSchema),
        z
          .lazy(() => TrackProduceByArtistCreateManyTrackInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const TrackProduceByArtistCreateManyTrackInputEnvelopeObjectSchema =
  Schema;
