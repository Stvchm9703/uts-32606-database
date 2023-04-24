import { z } from 'zod';
import { AlbumAvailableMarketCreateWithoutTagInputObjectSchema } from './AlbumAvailableMarketCreateWithoutTagInput.schema';
import { AlbumAvailableMarketUncheckedCreateWithoutTagInputObjectSchema } from './AlbumAvailableMarketUncheckedCreateWithoutTagInput.schema';
import { AlbumAvailableMarketCreateOrConnectWithoutTagInputObjectSchema } from './AlbumAvailableMarketCreateOrConnectWithoutTagInput.schema';
import { AlbumAvailableMarketCreateManyTagInputEnvelopeObjectSchema } from './AlbumAvailableMarketCreateManyTagInputEnvelope.schema';
import { AlbumAvailableMarketWhereUniqueInputObjectSchema } from './AlbumAvailableMarketWhereUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumAvailableMarketUncheckedCreateNestedManyWithoutTagInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AlbumAvailableMarketCreateWithoutTagInputObjectSchema),
          z
            .lazy(() => AlbumAvailableMarketCreateWithoutTagInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              AlbumAvailableMarketUncheckedCreateWithoutTagInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AlbumAvailableMarketUncheckedCreateWithoutTagInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              AlbumAvailableMarketCreateOrConnectWithoutTagInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AlbumAvailableMarketCreateOrConnectWithoutTagInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => AlbumAvailableMarketCreateManyTagInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => AlbumAvailableMarketWhereUniqueInputObjectSchema),
          z
            .lazy(() => AlbumAvailableMarketWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const AlbumAvailableMarketUncheckedCreateNestedManyWithoutTagInputObjectSchema =
  Schema;
