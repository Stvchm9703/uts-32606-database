import { z } from 'zod';
import { UserCreateWithoutFollowPlaylistsInputObjectSchema } from './UserCreateWithoutFollowPlaylistsInput.schema';
import { UserUncheckedCreateWithoutFollowPlaylistsInputObjectSchema } from './UserUncheckedCreateWithoutFollowPlaylistsInput.schema';
import { UserCreateOrConnectWithoutFollowPlaylistsInputObjectSchema } from './UserCreateOrConnectWithoutFollowPlaylistsInput.schema';
import { UserUpsertWithoutFollowPlaylistsInputObjectSchema } from './UserUpsertWithoutFollowPlaylistsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutFollowPlaylistsInputObjectSchema } from './UserUpdateWithoutFollowPlaylistsInput.schema';
import { UserUncheckedUpdateWithoutFollowPlaylistsInputObjectSchema } from './UserUncheckedUpdateWithoutFollowPlaylistsInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutFollowPlaylistsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutFollowPlaylistsInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutFollowPlaylistsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutFollowPlaylistsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutFollowPlaylistsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutFollowPlaylistsInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutFollowPlaylistsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutFollowPlaylistsNestedInputObjectSchema =
  Schema;
