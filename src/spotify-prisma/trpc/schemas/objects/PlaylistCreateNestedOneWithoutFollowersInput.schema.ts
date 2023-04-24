import { z } from 'zod';
import { PlaylistCreateWithoutFollowersInputObjectSchema } from './PlaylistCreateWithoutFollowersInput.schema';
import { PlaylistUncheckedCreateWithoutFollowersInputObjectSchema } from './PlaylistUncheckedCreateWithoutFollowersInput.schema';
import { PlaylistCreateOrConnectWithoutFollowersInputObjectSchema } from './PlaylistCreateOrConnectWithoutFollowersInput.schema';
import { PlaylistWhereUniqueInputObjectSchema } from './PlaylistWhereUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistCreateNestedOneWithoutFollowersInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PlaylistCreateWithoutFollowersInputObjectSchema),
        z.lazy(() => PlaylistUncheckedCreateWithoutFollowersInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => PlaylistCreateOrConnectWithoutFollowersInputObjectSchema)
      .optional(),
    connect: z.lazy(() => PlaylistWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const PlaylistCreateNestedOneWithoutFollowersInputObjectSchema = Schema;
