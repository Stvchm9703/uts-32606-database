import { z } from 'zod';
import { ArtistOnFollowingCreateWithoutArtistInputObjectSchema } from './ArtistOnFollowingCreateWithoutArtistInput.schema';
import { ArtistOnFollowingUncheckedCreateWithoutArtistInputObjectSchema } from './ArtistOnFollowingUncheckedCreateWithoutArtistInput.schema';
import { ArtistOnFollowingCreateOrConnectWithoutArtistInputObjectSchema } from './ArtistOnFollowingCreateOrConnectWithoutArtistInput.schema';
import { ArtistOnFollowingUpsertWithWhereUniqueWithoutArtistInputObjectSchema } from './ArtistOnFollowingUpsertWithWhereUniqueWithoutArtistInput.schema';
import { ArtistOnFollowingCreateManyArtistInputEnvelopeObjectSchema } from './ArtistOnFollowingCreateManyArtistInputEnvelope.schema';
import { ArtistOnFollowingWhereUniqueInputObjectSchema } from './ArtistOnFollowingWhereUniqueInput.schema';
import { ArtistOnFollowingUpdateWithWhereUniqueWithoutArtistInputObjectSchema } from './ArtistOnFollowingUpdateWithWhereUniqueWithoutArtistInput.schema';
import { ArtistOnFollowingUpdateManyWithWhereWithoutArtistInputObjectSchema } from './ArtistOnFollowingUpdateManyWithWhereWithoutArtistInput.schema';
import { ArtistOnFollowingScalarWhereInputObjectSchema } from './ArtistOnFollowingScalarWhereInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistOnFollowingUncheckedUpdateManyWithoutArtistNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              ArtistOnFollowingUpsertWithWhereUniqueWithoutArtistInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ArtistOnFollowingUpsertWithWhereUniqueWithoutArtistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ArtistOnFollowingCreateManyArtistInputEnvelopeObjectSchema)
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
              ArtistOnFollowingUpdateWithWhereUniqueWithoutArtistInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ArtistOnFollowingUpdateWithWhereUniqueWithoutArtistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ArtistOnFollowingUpdateManyWithWhereWithoutArtistInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ArtistOnFollowingUpdateManyWithWhereWithoutArtistInputObjectSchema,
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

export const ArtistOnFollowingUncheckedUpdateManyWithoutArtistNestedInputObjectSchema =
  Schema;
