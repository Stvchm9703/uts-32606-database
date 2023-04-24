import { z } from 'zod';
import { UserUpdateWithoutFollowingArtistsInputObjectSchema } from './UserUpdateWithoutFollowingArtistsInput.schema';
import { UserUncheckedUpdateWithoutFollowingArtistsInputObjectSchema } from './UserUncheckedUpdateWithoutFollowingArtistsInput.schema';
import { UserCreateWithoutFollowingArtistsInputObjectSchema } from './UserCreateWithoutFollowingArtistsInput.schema';
import { UserUncheckedCreateWithoutFollowingArtistsInputObjectSchema } from './UserUncheckedCreateWithoutFollowingArtistsInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.UserUpsertWithoutFollowingArtistsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutFollowingArtistsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutFollowingArtistsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutFollowingArtistsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutFollowingArtistsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutFollowingArtistsInputObjectSchema = Schema;
