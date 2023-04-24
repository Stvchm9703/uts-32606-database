import { z } from 'zod';
import { PlaylistOnFollowerScalarWhereInputObjectSchema } from './PlaylistOnFollowerScalarWhereInput.schema';
import { PlaylistOnFollowerUpdateManyMutationInputObjectSchema } from './PlaylistOnFollowerUpdateManyMutationInput.schema';
import { PlaylistOnFollowerUncheckedUpdateManyWithoutFollowersInputObjectSchema } from './PlaylistOnFollowerUncheckedUpdateManyWithoutFollowersInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistOnFollowerUpdateManyWithWhereWithoutPlaylistInput> =
  z
    .object({
      where: z.lazy(() => PlaylistOnFollowerScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => PlaylistOnFollowerUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            PlaylistOnFollowerUncheckedUpdateManyWithoutFollowersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PlaylistOnFollowerUpdateManyWithWhereWithoutPlaylistInputObjectSchema =
  Schema;
