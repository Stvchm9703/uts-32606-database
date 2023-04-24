import { z } from 'zod';
import { ArtistUpdateOneRequiredWithoutFollowersNestedInputObjectSchema } from './ArtistUpdateOneRequiredWithoutFollowersNestedInput.schema';
import { UserUpdateOneRequiredWithoutFollowingArtistsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutFollowingArtistsNestedInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistOnFollowingUpdateInput> = z
  .object({
    Artist: z
      .lazy(
        () => ArtistUpdateOneRequiredWithoutFollowersNestedInputObjectSchema,
      )
      .optional(),
    User: z
      .lazy(
        () =>
          UserUpdateOneRequiredWithoutFollowingArtistsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ArtistOnFollowingUpdateInputObjectSchema = Schema;
