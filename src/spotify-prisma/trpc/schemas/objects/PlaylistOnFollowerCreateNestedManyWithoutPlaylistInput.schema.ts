import { z } from 'zod';
import { PlaylistOnFollowerCreateWithoutPlaylistInputObjectSchema } from './PlaylistOnFollowerCreateWithoutPlaylistInput.schema';
import { PlaylistOnFollowerUncheckedCreateWithoutPlaylistInputObjectSchema } from './PlaylistOnFollowerUncheckedCreateWithoutPlaylistInput.schema';
import { PlaylistOnFollowerCreateOrConnectWithoutPlaylistInputObjectSchema } from './PlaylistOnFollowerCreateOrConnectWithoutPlaylistInput.schema';
import { PlaylistOnFollowerCreateManyPlaylistInputEnvelopeObjectSchema } from './PlaylistOnFollowerCreateManyPlaylistInputEnvelope.schema';
import { PlaylistOnFollowerWhereUniqueInputObjectSchema } from './PlaylistOnFollowerWhereUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistOnFollowerCreateNestedManyWithoutPlaylistInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => PlaylistOnFollowerCreateWithoutPlaylistInputObjectSchema,
          ),
          z
            .lazy(
              () => PlaylistOnFollowerCreateWithoutPlaylistInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              PlaylistOnFollowerUncheckedCreateWithoutPlaylistInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PlaylistOnFollowerUncheckedCreateWithoutPlaylistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              PlaylistOnFollowerCreateOrConnectWithoutPlaylistInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PlaylistOnFollowerCreateOrConnectWithoutPlaylistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => PlaylistOnFollowerCreateManyPlaylistInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => PlaylistOnFollowerWhereUniqueInputObjectSchema),
          z.lazy(() => PlaylistOnFollowerWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PlaylistOnFollowerCreateNestedManyWithoutPlaylistInputObjectSchema =
  Schema;
