import { z } from 'zod';
import { PlaylistCreateNestedOneWithoutFollowersInputObjectSchema } from './PlaylistCreateNestedOneWithoutFollowersInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistOnFollowerCreateWithoutUserInput> = z
  .object({
    Playlist: z.lazy(
      () => PlaylistCreateNestedOneWithoutFollowersInputObjectSchema,
    ),
  })
  .strict();

export const PlaylistOnFollowerCreateWithoutUserInputObjectSchema = Schema;
