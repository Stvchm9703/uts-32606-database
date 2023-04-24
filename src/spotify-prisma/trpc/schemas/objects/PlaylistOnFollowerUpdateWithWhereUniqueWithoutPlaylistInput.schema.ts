import { z } from 'zod';
import { PlaylistOnFollowerWhereUniqueInputObjectSchema } from './PlaylistOnFollowerWhereUniqueInput.schema';
import { PlaylistOnFollowerUpdateWithoutPlaylistInputObjectSchema } from './PlaylistOnFollowerUpdateWithoutPlaylistInput.schema';
import { PlaylistOnFollowerUncheckedUpdateWithoutPlaylistInputObjectSchema } from './PlaylistOnFollowerUncheckedUpdateWithoutPlaylistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistOnFollowerUpdateWithWhereUniqueWithoutPlaylistInput> =
  z
    .object({
      where: z.lazy(() => PlaylistOnFollowerWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => PlaylistOnFollowerUpdateWithoutPlaylistInputObjectSchema),
        z.lazy(
          () =>
            PlaylistOnFollowerUncheckedUpdateWithoutPlaylistInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PlaylistOnFollowerUpdateWithWhereUniqueWithoutPlaylistInputObjectSchema =
  Schema;
