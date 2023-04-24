import { z } from 'zod';
import { PlaylistOnFollowerScalarWhereInputObjectSchema } from './PlaylistOnFollowerScalarWhereInput.schema';
import { PlaylistOnFollowerUpdateManyMutationInputObjectSchema } from './PlaylistOnFollowerUpdateManyMutationInput.schema';
import { PlaylistOnFollowerUncheckedUpdateManyWithoutFollowPlaylistsInputObjectSchema } from './PlaylistOnFollowerUncheckedUpdateManyWithoutFollowPlaylistsInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistOnFollowerUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => PlaylistOnFollowerScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => PlaylistOnFollowerUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            PlaylistOnFollowerUncheckedUpdateManyWithoutFollowPlaylistsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PlaylistOnFollowerUpdateManyWithWhereWithoutUserInputObjectSchema =
  Schema;
