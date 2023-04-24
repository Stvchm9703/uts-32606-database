import { z } from 'zod';
import { PlaylistWhereUniqueInputObjectSchema } from './PlaylistWhereUniqueInput.schema';
import { PlaylistCreateWithoutFollowersInputObjectSchema } from './PlaylistCreateWithoutFollowersInput.schema';
import { PlaylistUncheckedCreateWithoutFollowersInputObjectSchema } from './PlaylistUncheckedCreateWithoutFollowersInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistCreateOrConnectWithoutFollowersInput> = z
  .object({
    where: z.lazy(() => PlaylistWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PlaylistCreateWithoutFollowersInputObjectSchema),
      z.lazy(() => PlaylistUncheckedCreateWithoutFollowersInputObjectSchema),
    ]),
  })
  .strict();

export const PlaylistCreateOrConnectWithoutFollowersInputObjectSchema = Schema;
