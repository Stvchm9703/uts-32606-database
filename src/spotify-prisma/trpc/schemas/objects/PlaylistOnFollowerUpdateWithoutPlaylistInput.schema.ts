import { z } from 'zod';
import { UserUpdateOneRequiredWithoutFollowPlaylistsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutFollowPlaylistsNestedInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistOnFollowerUpdateWithoutPlaylistInput> = z
  .object({
    User: z
      .lazy(
        () =>
          UserUpdateOneRequiredWithoutFollowPlaylistsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PlaylistOnFollowerUpdateWithoutPlaylistInputObjectSchema = Schema;
