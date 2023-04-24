import { z } from 'zod';
import { ArtistOnFollowingUserIdArtistIdCompoundUniqueInputObjectSchema } from './ArtistOnFollowingUserIdArtistIdCompoundUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistOnFollowingWhereUniqueInput> = z
  .object({
    userId_artistId: z
      .lazy(
        () => ArtistOnFollowingUserIdArtistIdCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ArtistOnFollowingWhereUniqueInputObjectSchema = Schema;
