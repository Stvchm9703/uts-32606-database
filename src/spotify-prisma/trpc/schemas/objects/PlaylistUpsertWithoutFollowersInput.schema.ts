import { z } from 'zod';
import { PlaylistUpdateWithoutFollowersInputObjectSchema } from './PlaylistUpdateWithoutFollowersInput.schema';
import { PlaylistUncheckedUpdateWithoutFollowersInputObjectSchema } from './PlaylistUncheckedUpdateWithoutFollowersInput.schema';
import { PlaylistCreateWithoutFollowersInputObjectSchema } from './PlaylistCreateWithoutFollowersInput.schema';
import { PlaylistUncheckedCreateWithoutFollowersInputObjectSchema } from './PlaylistUncheckedCreateWithoutFollowersInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistUpsertWithoutFollowersInput> = z
  .object({
    update: z.union([
      z.lazy(() => PlaylistUpdateWithoutFollowersInputObjectSchema),
      z.lazy(() => PlaylistUncheckedUpdateWithoutFollowersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PlaylistCreateWithoutFollowersInputObjectSchema),
      z.lazy(() => PlaylistUncheckedCreateWithoutFollowersInputObjectSchema),
    ]),
  })
  .strict();

export const PlaylistUpsertWithoutFollowersInputObjectSchema = Schema;
