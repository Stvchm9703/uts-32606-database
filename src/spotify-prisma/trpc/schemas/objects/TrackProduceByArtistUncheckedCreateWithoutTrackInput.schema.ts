import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackProduceByArtistUncheckedCreateWithoutTrackInput> =
  z
    .object({
      artistId: z.number(),
    })
    .strict();

export const TrackProduceByArtistUncheckedCreateWithoutTrackInputObjectSchema =
  Schema;
