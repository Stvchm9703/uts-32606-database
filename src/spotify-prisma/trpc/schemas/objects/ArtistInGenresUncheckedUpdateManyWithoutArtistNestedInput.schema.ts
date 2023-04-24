import { z } from 'zod';
import { ArtistInGenresCreateWithoutArtistInputObjectSchema } from './ArtistInGenresCreateWithoutArtistInput.schema';
import { ArtistInGenresUncheckedCreateWithoutArtistInputObjectSchema } from './ArtistInGenresUncheckedCreateWithoutArtistInput.schema';
import { ArtistInGenresCreateOrConnectWithoutArtistInputObjectSchema } from './ArtistInGenresCreateOrConnectWithoutArtistInput.schema';
import { ArtistInGenresUpsertWithWhereUniqueWithoutArtistInputObjectSchema } from './ArtistInGenresUpsertWithWhereUniqueWithoutArtistInput.schema';
import { ArtistInGenresCreateManyArtistInputEnvelopeObjectSchema } from './ArtistInGenresCreateManyArtistInputEnvelope.schema';
import { ArtistInGenresWhereUniqueInputObjectSchema } from './ArtistInGenresWhereUniqueInput.schema';
import { ArtistInGenresUpdateWithWhereUniqueWithoutArtistInputObjectSchema } from './ArtistInGenresUpdateWithWhereUniqueWithoutArtistInput.schema';
import { ArtistInGenresUpdateManyWithWhereWithoutArtistInputObjectSchema } from './ArtistInGenresUpdateManyWithWhereWithoutArtistInput.schema';
import { ArtistInGenresScalarWhereInputObjectSchema } from './ArtistInGenresScalarWhereInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistInGenresUncheckedUpdateManyWithoutArtistNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ArtistInGenresCreateWithoutArtistInputObjectSchema),
          z
            .lazy(() => ArtistInGenresCreateWithoutArtistInputObjectSchema)
            .array(),
          z.lazy(
            () => ArtistInGenresUncheckedCreateWithoutArtistInputObjectSchema,
          ),
          z
            .lazy(
              () => ArtistInGenresUncheckedCreateWithoutArtistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ArtistInGenresCreateOrConnectWithoutArtistInputObjectSchema,
          ),
          z
            .lazy(
              () => ArtistInGenresCreateOrConnectWithoutArtistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ArtistInGenresUpsertWithWhereUniqueWithoutArtistInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ArtistInGenresUpsertWithWhereUniqueWithoutArtistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ArtistInGenresCreateManyArtistInputEnvelopeObjectSchema)
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
              ArtistInGenresUpdateWithWhereUniqueWithoutArtistInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ArtistInGenresUpdateWithWhereUniqueWithoutArtistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ArtistInGenresUpdateManyWithWhereWithoutArtistInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ArtistInGenresUpdateManyWithWhereWithoutArtistInputObjectSchema,
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

export const ArtistInGenresUncheckedUpdateManyWithoutArtistNestedInputObjectSchema =
  Schema;
