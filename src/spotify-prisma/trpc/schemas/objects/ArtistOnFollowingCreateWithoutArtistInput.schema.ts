import { z } from 'zod';
import { UserCreateNestedOneWithoutFollowingArtistsInputObjectSchema } from './UserCreateNestedOneWithoutFollowingArtistsInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistOnFollowingCreateWithoutArtistInput> = z
  .object({
    User: z.lazy(
      () => UserCreateNestedOneWithoutFollowingArtistsInputObjectSchema,
    ),
  })
  .strict();

export const ArtistOnFollowingCreateWithoutArtistInputObjectSchema = Schema;
