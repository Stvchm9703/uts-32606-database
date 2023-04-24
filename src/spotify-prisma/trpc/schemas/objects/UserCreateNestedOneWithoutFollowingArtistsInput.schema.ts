import { z } from 'zod';
import { UserCreateWithoutFollowingArtistsInputObjectSchema } from './UserCreateWithoutFollowingArtistsInput.schema';
import { UserUncheckedCreateWithoutFollowingArtistsInputObjectSchema } from './UserUncheckedCreateWithoutFollowingArtistsInput.schema';
import { UserCreateOrConnectWithoutFollowingArtistsInputObjectSchema } from './UserCreateOrConnectWithoutFollowingArtistsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutFollowingArtistsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutFollowingArtistsInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutFollowingArtistsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutFollowingArtistsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutFollowingArtistsInputObjectSchema =
  Schema;
