import { z } from 'zod';
import { ArtistInGenresCreateWithoutArtistInputObjectSchema } from './ArtistInGenresCreateWithoutArtistInput.schema';
import { ArtistInGenresUncheckedCreateWithoutArtistInputObjectSchema } from './ArtistInGenresUncheckedCreateWithoutArtistInput.schema';
import { ArtistInGenresCreateOrConnectWithoutArtistInputObjectSchema } from './ArtistInGenresCreateOrConnectWithoutArtistInput.schema';
import { ArtistInGenresCreateManyArtistInputEnvelopeObjectSchema } from './ArtistInGenresCreateManyArtistInputEnvelope.schema';
import { ArtistInGenresWhereUniqueInputObjectSchema } from './ArtistInGenresWhereUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistInGenresUncheckedCreateNestedManyWithoutArtistInput> =
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
      createMany: z
        .lazy(() => ArtistInGenresCreateManyArtistInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ArtistInGenresWhereUniqueInputObjectSchema),
          z.lazy(() => ArtistInGenresWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ArtistInGenresUncheckedCreateNestedManyWithoutArtistInputObjectSchema =
  Schema;
