import { z } from 'zod';
import { PlaylistUpdateOneRequiredWithoutFollowersNestedInputObjectSchema } from './PlaylistUpdateOneRequiredWithoutFollowersNestedInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistOnFollowerUpdateWithoutUserInput> = z
  .object({
    Playlist: z
      .lazy(
        () => PlaylistUpdateOneRequiredWithoutFollowersNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PlaylistOnFollowerUpdateWithoutUserInputObjectSchema = Schema;
