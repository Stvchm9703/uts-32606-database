import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistOnFollowingUserIdArtistIdCompoundUniqueInput> =
  z
    .object({
      userId: z.number(),
      artistId: z.number(),
    })
    .strict();

export const ArtistOnFollowingUserIdArtistIdCompoundUniqueInputObjectSchema =
  Schema;
