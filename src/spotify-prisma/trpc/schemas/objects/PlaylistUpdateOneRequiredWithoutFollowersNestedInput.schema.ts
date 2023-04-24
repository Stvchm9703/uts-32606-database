import { z } from 'zod';
import { PlaylistCreateWithoutFollowersInputObjectSchema } from './PlaylistCreateWithoutFollowersInput.schema';
import { PlaylistUncheckedCreateWithoutFollowersInputObjectSchema } from './PlaylistUncheckedCreateWithoutFollowersInput.schema';
import { PlaylistCreateOrConnectWithoutFollowersInputObjectSchema } from './PlaylistCreateOrConnectWithoutFollowersInput.schema';
import { PlaylistUpsertWithoutFollowersInputObjectSchema } from './PlaylistUpsertWithoutFollowersInput.schema';
import { PlaylistWhereUniqueInputObjectSchema } from './PlaylistWhereUniqueInput.schema';
import { PlaylistUpdateWithoutFollowersInputObjectSchema } from './PlaylistUpdateWithoutFollowersInput.schema';
import { PlaylistUncheckedUpdateWithoutFollowersInputObjectSchema } from './PlaylistUncheckedUpdateWithoutFollowersInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistUpdateOneRequiredWithoutFollowersNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PlaylistCreateWithoutFollowersInputObjectSchema),
          z.lazy(
            () => PlaylistUncheckedCreateWithoutFollowersInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => PlaylistCreateOrConnectWithoutFollowersInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => PlaylistUpsertWithoutFollowersInputObjectSchema)
        .optional(),
      connect: z.lazy(() => PlaylistWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => PlaylistUpdateWithoutFollowersInputObjectSchema),
          z.lazy(
            () => PlaylistUncheckedUpdateWithoutFollowersInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const PlaylistUpdateOneRequiredWithoutFollowersNestedInputObjectSchema =
  Schema;
