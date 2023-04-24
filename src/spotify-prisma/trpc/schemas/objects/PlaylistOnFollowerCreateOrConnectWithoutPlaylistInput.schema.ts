import { z } from 'zod';
import { PlaylistOnFollowerWhereUniqueInputObjectSchema } from './PlaylistOnFollowerWhereUniqueInput.schema';
import { PlaylistOnFollowerCreateWithoutPlaylistInputObjectSchema } from './PlaylistOnFollowerCreateWithoutPlaylistInput.schema';
import { PlaylistOnFollowerUncheckedCreateWithoutPlaylistInputObjectSchema } from './PlaylistOnFollowerUncheckedCreateWithoutPlaylistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistOnFollowerCreateOrConnectWithoutPlaylistInput> =
  z
    .object({
      where: z.lazy(() => PlaylistOnFollowerWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => PlaylistOnFollowerCreateWithoutPlaylistInputObjectSchema),
        z.lazy(
          () =>
            PlaylistOnFollowerUncheckedCreateWithoutPlaylistInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PlaylistOnFollowerCreateOrConnectWithoutPlaylistInputObjectSchema =
  Schema;
