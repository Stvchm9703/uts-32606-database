import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutFollowPlaylistsInputObjectSchema } from './UserCreateWithoutFollowPlaylistsInput.schema';
import { UserUncheckedCreateWithoutFollowPlaylistsInputObjectSchema } from './UserUncheckedCreateWithoutFollowPlaylistsInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutFollowPlaylistsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutFollowPlaylistsInputObjectSchema),
        z.lazy(
          () => UserUncheckedCreateWithoutFollowPlaylistsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutFollowPlaylistsInputObjectSchema =
  Schema;
