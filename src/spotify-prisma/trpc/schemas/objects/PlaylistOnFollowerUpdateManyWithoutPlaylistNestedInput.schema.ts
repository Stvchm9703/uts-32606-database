import { z } from 'zod';
import { PlaylistOnFollowerCreateWithoutPlaylistInputObjectSchema } from './PlaylistOnFollowerCreateWithoutPlaylistInput.schema';
import { PlaylistOnFollowerUncheckedCreateWithoutPlaylistInputObjectSchema } from './PlaylistOnFollowerUncheckedCreateWithoutPlaylistInput.schema';
import { PlaylistOnFollowerCreateOrConnectWithoutPlaylistInputObjectSchema } from './PlaylistOnFollowerCreateOrConnectWithoutPlaylistInput.schema';
import { PlaylistOnFollowerUpsertWithWhereUniqueWithoutPlaylistInputObjectSchema } from './PlaylistOnFollowerUpsertWithWhereUniqueWithoutPlaylistInput.schema';
import { PlaylistOnFollowerCreateManyPlaylistInputEnvelopeObjectSchema } from './PlaylistOnFollowerCreateManyPlaylistInputEnvelope.schema';
import { PlaylistOnFollowerWhereUniqueInputObjectSchema } from './PlaylistOnFollowerWhereUniqueInput.schema';
import { PlaylistOnFollowerUpdateWithWhereUniqueWithoutPlaylistInputObjectSchema } from './PlaylistOnFollowerUpdateWithWhereUniqueWithoutPlaylistInput.schema';
import { PlaylistOnFollowerUpdateManyWithWhereWithoutPlaylistInputObjectSchema } from './PlaylistOnFollowerUpdateManyWithWhereWithoutPlaylistInput.schema';
import { PlaylistOnFollowerScalarWhereInputObjectSchema } from './PlaylistOnFollowerScalarWhereInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistOnFollowerUpdateManyWithoutPlaylistNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              PlaylistOnFollowerUpsertWithWhereUniqueWithoutPlaylistInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PlaylistOnFollowerUpsertWithWhereUniqueWithoutPlaylistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => PlaylistOnFollowerCreateManyPlaylistInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => PlaylistOnFollowerWhereUniqueInputObjectSchema),
          z.lazy(() => PlaylistOnFollowerWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => PlaylistOnFollowerWhereUniqueInputObjectSchema),
          z.lazy(() => PlaylistOnFollowerWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => PlaylistOnFollowerWhereUniqueInputObjectSchema),
          z.lazy(() => PlaylistOnFollowerWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => PlaylistOnFollowerWhereUniqueInputObjectSchema),
          z.lazy(() => PlaylistOnFollowerWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              PlaylistOnFollowerUpdateWithWhereUniqueWithoutPlaylistInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PlaylistOnFollowerUpdateWithWhereUniqueWithoutPlaylistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              PlaylistOnFollowerUpdateManyWithWhereWithoutPlaylistInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PlaylistOnFollowerUpdateManyWithWhereWithoutPlaylistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => PlaylistOnFollowerScalarWhereInputObjectSchema),
          z.lazy(() => PlaylistOnFollowerScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PlaylistOnFollowerUpdateManyWithoutPlaylistNestedInputObjectSchema =
  Schema;
