import { z } from 'zod';
import { PlaylistUpdateOneRequiredWithoutFollowersNestedInputObjectSchema } from './PlaylistUpdateOneRequiredWithoutFollowersNestedInput.schema';
import { UserUpdateOneRequiredWithoutFollowPlaylistsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutFollowPlaylistsNestedInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistOnFollowerUpdateInput> = z
  .object({
    Playlist: z
      .lazy(
        () => PlaylistUpdateOneRequiredWithoutFollowersNestedInputObjectSchema,
      )
      .optional(),
    User: z
      .lazy(
        () =>
          UserUpdateOneRequiredWithoutFollowPlaylistsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PlaylistOnFollowerUpdateInputObjectSchema = Schema;
