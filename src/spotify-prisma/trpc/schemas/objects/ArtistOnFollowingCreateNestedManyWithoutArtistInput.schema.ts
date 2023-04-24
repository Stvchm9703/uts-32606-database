import { z } from 'zod';
import { ArtistOnFollowingCreateWithoutArtistInputObjectSchema } from './ArtistOnFollowingCreateWithoutArtistInput.schema';
import { ArtistOnFollowingUncheckedCreateWithoutArtistInputObjectSchema } from './ArtistOnFollowingUncheckedCreateWithoutArtistInput.schema';
import { ArtistOnFollowingCreateOrConnectWithoutArtistInputObjectSchema } from './ArtistOnFollowingCreateOrConnectWithoutArtistInput.schema';
import { ArtistOnFollowingCreateManyArtistInputEnvelopeObjectSchema } from './ArtistOnFollowingCreateManyArtistInputEnvelope.schema';
import { ArtistOnFollowingWhereUniqueInputObjectSchema } from './ArtistOnFollowingWhereUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistOnFollowingCreateNestedManyWithoutArtistInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ArtistOnFollowingCreateWithoutArtistInputObjectSchema),
          z
            .lazy(() => ArtistOnFollowingCreateWithoutArtistInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              ArtistOnFollowingUncheckedCreateWithoutArtistInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ArtistOnFollowingUncheckedCreateWithoutArtistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              ArtistOnFollowingCreateOrConnectWithoutArtistInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ArtistOnFollowingCreateOrConnectWithoutArtistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ArtistOnFollowingCreateManyArtistInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ArtistOnFollowingWhereUniqueInputObjectSchema),
          z.lazy(() => ArtistOnFollowingWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ArtistOnFollowingCreateNestedManyWithoutArtistInputObjectSchema =
  Schema;
