import { z } from 'zod';
import { UserUpdateWithoutPlaylistInputObjectSchema } from './UserUpdateWithoutPlaylistInput.schema';
import { UserUncheckedUpdateWithoutPlaylistInputObjectSchema } from './UserUncheckedUpdateWithoutPlaylistInput.schema';
import { UserCreateWithoutPlaylistInputObjectSchema } from './UserCreateWithoutPlaylistInput.schema';
import { UserUncheckedCreateWithoutPlaylistInputObjectSchema } from './UserUncheckedCreateWithoutPlaylistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.UserUpsertWithoutPlaylistInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutPlaylistInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutPlaylistInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutPlaylistInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutPlaylistInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutPlaylistInputObjectSchema = Schema;
