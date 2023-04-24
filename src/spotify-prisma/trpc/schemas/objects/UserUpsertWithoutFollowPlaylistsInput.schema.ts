import { z } from 'zod';
import { UserUpdateWithoutFollowPlaylistsInputObjectSchema } from './UserUpdateWithoutFollowPlaylistsInput.schema';
import { UserUncheckedUpdateWithoutFollowPlaylistsInputObjectSchema } from './UserUncheckedUpdateWithoutFollowPlaylistsInput.schema';
import { UserCreateWithoutFollowPlaylistsInputObjectSchema } from './UserCreateWithoutFollowPlaylistsInput.schema';
import { UserUncheckedCreateWithoutFollowPlaylistsInputObjectSchema } from './UserUncheckedCreateWithoutFollowPlaylistsInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.UserUpsertWithoutFollowPlaylistsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutFollowPlaylistsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutFollowPlaylistsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutFollowPlaylistsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutFollowPlaylistsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutFollowPlaylistsInputObjectSchema = Schema;
