import { z } from 'zod';
import { ArtistOnFollowingCreateWithoutUserInputObjectSchema } from './ArtistOnFollowingCreateWithoutUserInput.schema';
import { ArtistOnFollowingUncheckedCreateWithoutUserInputObjectSchema } from './ArtistOnFollowingUncheckedCreateWithoutUserInput.schema';
import { ArtistOnFollowingCreateOrConnectWithoutUserInputObjectSchema } from './ArtistOnFollowingCreateOrConnectWithoutUserInput.schema';
import { ArtistOnFollowingCreateManyUserInputEnvelopeObjectSchema } from './ArtistOnFollowingCreateManyUserInputEnvelope.schema';
import { ArtistOnFollowingWhereUniqueInputObjectSchema } from './ArtistOnFollowingWhereUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistOnFollowingUncheckedCreateNestedManyWithoutUserInput> =
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
      createMany: z
        .lazy(() => ArtistOnFollowingCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ArtistOnFollowingWhereUniqueInputObjectSchema),
          z.lazy(() => ArtistOnFollowingWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ArtistOnFollowingUncheckedCreateNestedManyWithoutUserInputObjectSchema =
  Schema;
