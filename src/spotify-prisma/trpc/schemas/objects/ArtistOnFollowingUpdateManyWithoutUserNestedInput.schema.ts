import { z } from 'zod';
import { ArtistOnFollowingCreateWithoutUserInputObjectSchema } from './ArtistOnFollowingCreateWithoutUserInput.schema';
import { ArtistOnFollowingUncheckedCreateWithoutUserInputObjectSchema } from './ArtistOnFollowingUncheckedCreateWithoutUserInput.schema';
import { ArtistOnFollowingCreateOrConnectWithoutUserInputObjectSchema } from './ArtistOnFollowingCreateOrConnectWithoutUserInput.schema';
import { ArtistOnFollowingUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './ArtistOnFollowingUpsertWithWhereUniqueWithoutUserInput.schema';
import { ArtistOnFollowingCreateManyUserInputEnvelopeObjectSchema } from './ArtistOnFollowingCreateManyUserInputEnvelope.schema';
import { ArtistOnFollowingWhereUniqueInputObjectSchema } from './ArtistOnFollowingWhereUniqueInput.schema';
import { ArtistOnFollowingUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './ArtistOnFollowingUpdateWithWhereUniqueWithoutUserInput.schema';
import { ArtistOnFollowingUpdateManyWithWhereWithoutUserInputObjectSchema } from './ArtistOnFollowingUpdateManyWithWhereWithoutUserInput.schema';
import { ArtistOnFollowingScalarWhereInputObjectSchema } from './ArtistOnFollowingScalarWhereInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistOnFollowingUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ArtistOnFollowingCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => ArtistOnFollowingCreateWithoutUserInputObjectSchema)
            .array(),
          z.lazy(
            () => ArtistOnFollowingUncheckedCreateWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ArtistOnFollowingUncheckedCreateWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ArtistOnFollowingCreateOrConnectWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ArtistOnFollowingCreateOrConnectWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ArtistOnFollowingUpsertWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ArtistOnFollowingUpsertWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ArtistOnFollowingCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ArtistOnFollowingWhereUniqueInputObjectSchema),
          z.lazy(() => ArtistOnFollowingWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ArtistOnFollowingWhereUniqueInputObjectSchema),
          z.lazy(() => ArtistOnFollowingWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ArtistOnFollowingWhereUniqueInputObjectSchema),
          z.lazy(() => ArtistOnFollowingWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ArtistOnFollowingWhereUniqueInputObjectSchema),
          z.lazy(() => ArtistOnFollowingWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ArtistOnFollowingUpdateWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ArtistOnFollowingUpdateWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ArtistOnFollowingUpdateManyWithWhereWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ArtistOnFollowingUpdateManyWithWhereWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ArtistOnFollowingScalarWhereInputObjectSchema),
          z.lazy(() => ArtistOnFollowingScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ArtistOnFollowingUpdateManyWithoutUserNestedInputObjectSchema =
  Schema;
