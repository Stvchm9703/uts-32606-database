import { z } from 'zod';
import { UserCreateNestedOneWithoutFollowPlaylistsInputObjectSchema } from './UserCreateNestedOneWithoutFollowPlaylistsInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistOnFollowerCreateWithoutPlaylistInput> = z
  .object({
    User: z.lazy(
      () => UserCreateNestedOneWithoutFollowPlaylistsInputObjectSchema,
    ),
  })
  .strict();

export const PlaylistOnFollowerCreateWithoutPlaylistInputObjectSchema = Schema;
