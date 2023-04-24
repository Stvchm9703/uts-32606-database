import { z } from 'zod';
import { ArtistCreateNestedOneWithoutFollowersInputObjectSchema } from './ArtistCreateNestedOneWithoutFollowersInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistOnFollowingCreateWithoutUserInput> = z
  .object({
    Artist: z.lazy(
      () => ArtistCreateNestedOneWithoutFollowersInputObjectSchema,
    ),
  })
  .strict();

export const ArtistOnFollowingCreateWithoutUserInputObjectSchema = Schema;
