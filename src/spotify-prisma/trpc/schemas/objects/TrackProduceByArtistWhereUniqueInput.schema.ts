import { z } from 'zod';
import { TrackProduceByArtistTrackIdArtistIdCompoundUniqueInputObjectSchema } from './TrackProduceByArtistTrackIdArtistIdCompoundUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackProduceByArtistWhereUniqueInput> = z
  .object({
    trackId_artistId: z
      .lazy(
        () =>
          TrackProduceByArtistTrackIdArtistIdCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TrackProduceByArtistWhereUniqueInputObjectSchema = Schema;
