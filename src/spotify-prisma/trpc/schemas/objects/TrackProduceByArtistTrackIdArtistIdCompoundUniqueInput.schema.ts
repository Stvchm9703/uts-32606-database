import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackProduceByArtistTrackIdArtistIdCompoundUniqueInput> =
  z
    .object({
      trackId: z.number(),
      artistId: z.number(),
    })
    .strict();

export const TrackProduceByArtistTrackIdArtistIdCompoundUniqueInputObjectSchema =
  Schema;
