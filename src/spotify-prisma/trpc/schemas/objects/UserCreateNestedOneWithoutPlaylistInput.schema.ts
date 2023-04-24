import { z } from 'zod';
import { UserCreateWithoutPlaylistInputObjectSchema } from './UserCreateWithoutPlaylistInput.schema';
import { UserUncheckedCreateWithoutPlaylistInputObjectSchema } from './UserUncheckedCreateWithoutPlaylistInput.schema';
import { UserCreateOrConnectWithoutPlaylistInputObjectSchema } from './UserCreateOrConnectWithoutPlaylistInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutPlaylistInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutPlaylistInputObjectSchema = Schema;
