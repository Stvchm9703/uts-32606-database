import { z } from 'zod';
import { ArtistInGenresCreateWithoutTagInputObjectSchema } from './ArtistInGenresCreateWithoutTagInput.schema';
import { ArtistInGenresUncheckedCreateWithoutTagInputObjectSchema } from './ArtistInGenresUncheckedCreateWithoutTagInput.schema';
import { ArtistInGenresCreateOrConnectWithoutTagInputObjectSchema } from './ArtistInGenresCreateOrConnectWithoutTagInput.schema';
import { ArtistInGenresUpsertWithWhereUniqueWithoutTagInputObjectSchema } from './ArtistInGenresUpsertWithWhereUniqueWithoutTagInput.schema';
import { ArtistInGenresCreateManyTagInputEnvelopeObjectSchema } from './ArtistInGenresCreateManyTagInputEnvelope.schema';
import { ArtistInGenresWhereUniqueInputObjectSchema } from './ArtistInGenresWhereUniqueInput.schema';
import { ArtistInGenresUpdateWithWhereUniqueWithoutTagInputObjectSchema } from './ArtistInGenresUpdateWithWhereUniqueWithoutTagInput.schema';
import { ArtistInGenresUpdateManyWithWhereWithoutTagInputObjectSchema } from './ArtistInGenresUpdateManyWithWhereWithoutTagInput.schema';
import { ArtistInGenresScalarWhereInputObjectSchema } from './ArtistInGenresScalarWhereInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistInGenresUncheckedUpdateManyWithoutTagNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ArtistInGenresCreateWithoutTagInputObjectSchema),
          z.lazy(() => ArtistInGenresCreateWithoutTagInputObjectSchema).array(),
          z.lazy(
            () => ArtistInGenresUncheckedCreateWithoutTagInputObjectSchema,
          ),
          z
            .lazy(
              () => ArtistInGenresUncheckedCreateWithoutTagInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ArtistInGenresCreateOrConnectWithoutTagInputObjectSchema,
          ),
          z
            .lazy(
              () => ArtistInGenresCreateOrConnectWithoutTagInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ArtistInGenresUpsertWithWhereUniqueWithoutTagInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ArtistInGenresUpsertWithWhereUniqueWithoutTagInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ArtistInGenresCreateManyTagInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ArtistInGenresWhereUniqueInputObjectSchema),
          z.lazy(() => ArtistInGenresWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ArtistInGenresWhereUniqueInputObjectSchema),
          z.lazy(() => ArtistInGenresWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ArtistInGenresWhereUniqueInputObjectSchema),
          z.lazy(() => ArtistInGenresWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ArtistInGenresWhereUniqueInputObjectSchema),
          z.lazy(() => ArtistInGenresWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ArtistInGenresUpdateWithWhereUniqueWithoutTagInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ArtistInGenresUpdateWithWhereUniqueWithoutTagInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ArtistInGenresUpdateManyWithWhereWithoutTagInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ArtistInGenresUpdateManyWithWhereWithoutTagInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ArtistInGenresScalarWhereInputObjectSchema),
          z.lazy(() => ArtistInGenresScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ArtistInGenresUncheckedUpdateManyWithoutTagNestedInputObjectSchema =
  Schema;
