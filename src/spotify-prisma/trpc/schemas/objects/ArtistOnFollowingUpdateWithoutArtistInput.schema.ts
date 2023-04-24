import { z } from 'zod';
import { UserUpdateOneRequiredWithoutFollowingArtistsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutFollowingArtistsNestedInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistOnFollowingUpdateWithoutArtistInput> = z
  .object({
    User: z
      .lazy(
        () =>
          UserUpdateOneRequiredWithoutFollowingArtistsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ArtistOnFollowingUpdateWithoutArtistInputObjectSchema = Schema;
