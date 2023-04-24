import { z } from 'zod';
import { PlaylistCreateNestedOneWithoutFollowersInputObjectSchema } from './PlaylistCreateNestedOneWithoutFollowersInput.schema';
import { UserCreateNestedOneWithoutFollowPlaylistsInputObjectSchema } from './UserCreateNestedOneWithoutFollowPlaylistsInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistOnFollowerCreateInput> = z
  .object({
    Playlist: z.lazy(
      () => PlaylistCreateNestedOneWithoutFollowersInputObjectSchema,
    ),
    User: z.lazy(
      () => UserCreateNestedOneWithoutFollowPlaylistsInputObjectSchema,
    ),
  })
  .strict();

export const PlaylistOnFollowerCreateInputObjectSchema = Schema;
