import { z } from 'zod';
import { UserCreateWithoutPlaylistInputObjectSchema } from './UserCreateWithoutPlaylistInput.schema';
import { UserUncheckedCreateWithoutPlaylistInputObjectSchema } from './UserUncheckedCreateWithoutPlaylistInput.schema';
import { UserCreateOrConnectWithoutPlaylistInputObjectSchema } from './UserCreateOrConnectWithoutPlaylistInput.schema';
import { UserUpsertWithoutPlaylistInputObjectSchema } from './UserUpsertWithoutPlaylistInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutPlaylistInputObjectSchema } from './UserUpdateWithoutPlaylistInput.schema';
import { UserUncheckedUpdateWithoutPlaylistInputObjectSchema } from './UserUncheckedUpdateWithoutPlaylistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPlaylistNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutPlaylistInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutPlaylistInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutPlaylistInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutPlaylistInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutPlaylistInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutPlaylistInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutPlaylistNestedInputObjectSchema =
  Schema;
