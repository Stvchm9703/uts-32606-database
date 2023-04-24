import { z } from 'zod';
import { UserCreateWithoutFollowPlaylistsInputObjectSchema } from './UserCreateWithoutFollowPlaylistsInput.schema';
import { UserUncheckedCreateWithoutFollowPlaylistsInputObjectSchema } from './UserUncheckedCreateWithoutFollowPlaylistsInput.schema';
import { UserCreateOrConnectWithoutFollowPlaylistsInputObjectSchema } from './UserCreateOrConnectWithoutFollowPlaylistsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutFollowPlaylistsInput> =
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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutFollowPlaylistsInputObjectSchema =
  Schema;
