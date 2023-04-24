import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutFollowingArtistsInputObjectSchema } from './UserCreateWithoutFollowingArtistsInput.schema';
import { UserUncheckedCreateWithoutFollowingArtistsInputObjectSchema } from './UserUncheckedCreateWithoutFollowingArtistsInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutFollowingArtistsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutFollowingArtistsInputObjectSchema),
        z.lazy(
          () => UserUncheckedCreateWithoutFollowingArtistsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutFollowingArtistsInputObjectSchema =
  Schema;
