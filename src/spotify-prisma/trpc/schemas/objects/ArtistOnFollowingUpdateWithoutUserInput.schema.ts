import { z } from 'zod';
import { ArtistUpdateOneRequiredWithoutFollowersNestedInputObjectSchema } from './ArtistUpdateOneRequiredWithoutFollowersNestedInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistOnFollowingUpdateWithoutUserInput> = z
  .object({
    Artist: z
      .lazy(
        () => ArtistUpdateOneRequiredWithoutFollowersNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ArtistOnFollowingUpdateWithoutUserInputObjectSchema = Schema;
