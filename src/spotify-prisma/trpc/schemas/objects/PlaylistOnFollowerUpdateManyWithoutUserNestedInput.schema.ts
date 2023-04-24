import { z } from 'zod';
import { PlaylistOnFollowerCreateWithoutUserInputObjectSchema } from './PlaylistOnFollowerCreateWithoutUserInput.schema';
import { PlaylistOnFollowerUncheckedCreateWithoutUserInputObjectSchema } from './PlaylistOnFollowerUncheckedCreateWithoutUserInput.schema';
import { PlaylistOnFollowerCreateOrConnectWithoutUserInputObjectSchema } from './PlaylistOnFollowerCreateOrConnectWithoutUserInput.schema';
import { PlaylistOnFollowerUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './PlaylistOnFollowerUpsertWithWhereUniqueWithoutUserInput.schema';
import { PlaylistOnFollowerCreateManyUserInputEnvelopeObjectSchema } from './PlaylistOnFollowerCreateManyUserInputEnvelope.schema';
import { PlaylistOnFollowerWhereUniqueInputObjectSchema } from './PlaylistOnFollowerWhereUniqueInput.schema';
import { PlaylistOnFollowerUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './PlaylistOnFollowerUpdateWithWhereUniqueWithoutUserInput.schema';
import { PlaylistOnFollowerUpdateManyWithWhereWithoutUserInputObjectSchema } from './PlaylistOnFollowerUpdateManyWithWhereWithoutUserInput.schema';
import { PlaylistOnFollowerScalarWhereInputObjectSchema } from './PlaylistOnFollowerScalarWhereInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistOnFollowerUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PlaylistOnFollowerCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => PlaylistOnFollowerCreateWithoutUserInputObjectSchema)
            .array(),
          z.lazy(
            () => PlaylistOnFollowerUncheckedCreateWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PlaylistOnFollowerUncheckedCreateWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => PlaylistOnFollowerCreateOrConnectWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PlaylistOnFollowerCreateOrConnectWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              PlaylistOnFollowerUpsertWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PlaylistOnFollowerUpsertWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PlaylistOnFollowerCreateManyUserInputEnvelopeObjectSchema)
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
              PlaylistOnFollowerUpdateWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PlaylistOnFollowerUpdateWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              PlaylistOnFollowerUpdateManyWithWhereWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PlaylistOnFollowerUpdateManyWithWhereWithoutUserInputObjectSchema,
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

export const PlaylistOnFollowerUpdateManyWithoutUserNestedInputObjectSchema =
  Schema;
