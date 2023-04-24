import { z } from 'zod';
import { UserCreateWithoutFollowingArtistsInputObjectSchema } from './UserCreateWithoutFollowingArtistsInput.schema';
import { UserUncheckedCreateWithoutFollowingArtistsInputObjectSchema } from './UserUncheckedCreateWithoutFollowingArtistsInput.schema';
import { UserCreateOrConnectWithoutFollowingArtistsInputObjectSchema } from './UserCreateOrConnectWithoutFollowingArtistsInput.schema';
import { UserUpsertWithoutFollowingArtistsInputObjectSchema } from './UserUpsertWithoutFollowingArtistsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutFollowingArtistsInputObjectSchema } from './UserUpdateWithoutFollowingArtistsInput.schema';
import { UserUncheckedUpdateWithoutFollowingArtistsInputObjectSchema } from './UserUncheckedUpdateWithoutFollowingArtistsInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutFollowingArtistsNestedInput> =
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
      upsert: z
        .lazy(() => UserUpsertWithoutFollowingArtistsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutFollowingArtistsInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutFollowingArtistsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutFollowingArtistsNestedInputObjectSchema =
  Schema;
