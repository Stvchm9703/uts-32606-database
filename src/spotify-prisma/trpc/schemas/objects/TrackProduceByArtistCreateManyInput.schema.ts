import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackProduceByArtistCreateManyInput> = z
  .object({
    trackId: z.number(),
    artistId: z.number(),
  })
  .strict();

export const TrackProduceByArtistCreateManyInputObjectSchema = Schema;
