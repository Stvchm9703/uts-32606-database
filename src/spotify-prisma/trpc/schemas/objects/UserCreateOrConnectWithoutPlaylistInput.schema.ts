import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutPlaylistInputObjectSchema } from './UserCreateWithoutPlaylistInput.schema';
import { UserUncheckedCreateWithoutPlaylistInputObjectSchema } from './UserUncheckedCreateWithoutPlaylistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutPlaylistInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutPlaylistInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutPlaylistInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutPlaylistInputObjectSchema = Schema;
