import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistOnFollowingUncheckedCreateWithoutArtistInput> =
  z
    .object({
      userId: z.number(),
    })
    .strict();

export const ArtistOnFollowingUncheckedCreateWithoutArtistInputObjectSchema =
  Schema;
