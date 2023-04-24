import { z } from 'zod';
import { ArtistInGenresCreateWithoutTagInputObjectSchema } from './ArtistInGenresCreateWithoutTagInput.schema';
import { ArtistInGenresUncheckedCreateWithoutTagInputObjectSchema } from './ArtistInGenresUncheckedCreateWithoutTagInput.schema';
import { ArtistInGenresCreateOrConnectWithoutTagInputObjectSchema } from './ArtistInGenresCreateOrConnectWithoutTagInput.schema';
import { ArtistInGenresCreateManyTagInputEnvelopeObjectSchema } from './ArtistInGenresCreateManyTagInputEnvelope.schema';
import { ArtistInGenresWhereUniqueInputObjectSchema } from './ArtistInGenresWhereUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistInGenresUncheckedCreateNestedManyWithoutTagInput> =
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
      createMany: z
        .lazy(() => ArtistInGenresCreateManyTagInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ArtistInGenresWhereUniqueInputObjectSchema),
          z.lazy(() => ArtistInGenresWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ArtistInGenresUncheckedCreateNestedManyWithoutTagInputObjectSchema =
  Schema;
