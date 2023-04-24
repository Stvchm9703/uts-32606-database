import { z } from 'zod';
import { AlbumAvailableMarketWhereUniqueInputObjectSchema } from './AlbumAvailableMarketWhereUniqueInput.schema';
import { AlbumAvailableMarketCreateWithoutAlbumInputObjectSchema } from './AlbumAvailableMarketCreateWithoutAlbumInput.schema';
import { AlbumAvailableMarketUncheckedCreateWithoutAlbumInputObjectSchema } from './AlbumAvailableMarketUncheckedCreateWithoutAlbumInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumAvailableMarketCreateOrConnectWithoutAlbumInput> =
  z
    .object({
      where: z.lazy(() => AlbumAvailableMarketWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => AlbumAvailableMarketCreateWithoutAlbumInputObjectSchema),
        z.lazy(
          () =>
            AlbumAvailableMarketUncheckedCreateWithoutAlbumInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AlbumAvailableMarketCreateOrConnectWithoutAlbumInputObjectSchema =
  Schema;
