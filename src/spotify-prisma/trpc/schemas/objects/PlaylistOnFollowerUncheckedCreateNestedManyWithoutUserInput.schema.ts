import { z } from 'zod';
import { PlaylistOnFollowerCreateWithoutUserInputObjectSchema } from './PlaylistOnFollowerCreateWithoutUserInput.schema';
import { PlaylistOnFollowerUncheckedCreateWithoutUserInputObjectSchema } from './PlaylistOnFollowerUncheckedCreateWithoutUserInput.schema';
import { PlaylistOnFollowerCreateOrConnectWithoutUserInputObjectSchema } from './PlaylistOnFollowerCreateOrConnectWithoutUserInput.schema';
import { PlaylistOnFollowerCreateManyUserInputEnvelopeObjectSchema } from './PlaylistOnFollowerCreateManyUserInputEnvelope.schema';
import { PlaylistOnFollowerWhereUniqueInputObjectSchema } from './PlaylistOnFollowerWhereUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistOnFollowerUncheckedCreateNestedManyWithoutUserInput> =
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
      createMany: z
        .lazy(() => PlaylistOnFollowerCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => PlaylistOnFollowerWhereUniqueInputObjectSchema),
          z.lazy(() => PlaylistOnFollowerWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PlaylistOnFollowerUncheckedCreateNestedManyWithoutUserInputObjectSchema =
  Schema;
