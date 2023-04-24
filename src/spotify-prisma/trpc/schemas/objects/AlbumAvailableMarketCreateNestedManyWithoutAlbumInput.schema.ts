import { z } from 'zod';
import { AlbumAvailableMarketCreateWithoutAlbumInputObjectSchema } from './AlbumAvailableMarketCreateWithoutAlbumInput.schema';
import { AlbumAvailableMarketUncheckedCreateWithoutAlbumInputObjectSchema } from './AlbumAvailableMarketUncheckedCreateWithoutAlbumInput.schema';
import { AlbumAvailableMarketCreateOrConnectWithoutAlbumInputObjectSchema } from './AlbumAvailableMarketCreateOrConnectWithoutAlbumInput.schema';
import { AlbumAvailableMarketCreateManyAlbumInputEnvelopeObjectSchema } from './AlbumAvailableMarketCreateManyAlbumInputEnvelope.schema';
import { AlbumAvailableMarketWhereUniqueInputObjectSchema } from './AlbumAvailableMarketWhereUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumAvailableMarketCreateNestedManyWithoutAlbumInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AlbumAvailableMarketCreateWithoutAlbumInputObjectSchema),
          z
            .lazy(() => AlbumAvailableMarketCreateWithoutAlbumInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              AlbumAvailableMarketUncheckedCreateWithoutAlbumInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AlbumAvailableMarketUncheckedCreateWithoutAlbumInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              AlbumAvailableMarketCreateOrConnectWithoutAlbumInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AlbumAvailableMarketCreateOrConnectWithoutAlbumInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => AlbumAvailableMarketCreateManyAlbumInputEnvelopeObjectSchema,
        )
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

export const AlbumAvailableMarketCreateNestedManyWithoutAlbumInputObjectSchema =
  Schema;
