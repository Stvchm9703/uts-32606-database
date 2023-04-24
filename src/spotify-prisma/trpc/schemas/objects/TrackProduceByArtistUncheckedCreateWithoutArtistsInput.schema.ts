import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackProduceByArtistUncheckedCreateWithoutArtistsInput> =
  z
    .object({
      trackId: z.number(),
    })
    .strict();

export const TrackProduceByArtistUncheckedCreateWithoutArtistsInputObjectSchema =
  Schema;
