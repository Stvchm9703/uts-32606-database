import { z } from 'zod';
import { PlaylistOnFollowerWhereUniqueInputObjectSchema } from './PlaylistOnFollowerWhereUniqueInput.schema';
import { PlaylistOnFollowerUpdateWithoutPlaylistInputObjectSchema } from './PlaylistOnFollowerUpdateWithoutPlaylistInput.schema';
import { PlaylistOnFollowerUncheckedUpdateWithoutPlaylistInputObjectSchema } from './PlaylistOnFollowerUncheckedUpdateWithoutPlaylistInput.schema';
import { PlaylistOnFollowerCreateWithoutPlaylistInputObjectSchema } from './PlaylistOnFollowerCreateWithoutPlaylistInput.schema';
import { PlaylistOnFollowerUncheckedCreateWithoutPlaylistInputObjectSchema } from './PlaylistOnFollowerUncheckedCreateWithoutPlaylistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistOnFollowerUpsertWithWhereUniqueWithoutPlaylistInput> =
  z
    .object({
      where: z.lazy(() => PlaylistOnFollowerWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => PlaylistOnFollowerUpdateWithoutPlaylistInputObjectSchema),
        z.lazy(
          () =>
            PlaylistOnFollowerUncheckedUpdateWithoutPlaylistInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => PlaylistOnFollowerCreateWithoutPlaylistInputObjectSchema),
        z.lazy(
          () =>
            PlaylistOnFollowerUncheckedCreateWithoutPlaylistInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PlaylistOnFollowerUpsertWithWhereUniqueWithoutPlaylistInputObjectSchema =
  Schema;
