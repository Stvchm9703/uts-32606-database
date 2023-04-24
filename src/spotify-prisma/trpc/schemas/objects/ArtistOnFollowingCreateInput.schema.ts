import { z } from 'zod';
import { ArtistCreateNestedOneWithoutFollowersInputObjectSchema } from './ArtistCreateNestedOneWithoutFollowersInput.schema';
import { UserCreateNestedOneWithoutFollowingArtistsInputObjectSchema } from './UserCreateNestedOneWithoutFollowingArtistsInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistOnFollowingCreateInput> = z
  .object({
    Artist: z.lazy(
      () => ArtistCreateNestedOneWithoutFollowersInputObjectSchema,
    ),
    User: z.lazy(
      () => UserCreateNestedOneWithoutFollowingArtistsInputObjectSchema,
    ),
  })
  .strict();

export const ArtistOnFollowingCreateInputObjectSchema = Schema;
