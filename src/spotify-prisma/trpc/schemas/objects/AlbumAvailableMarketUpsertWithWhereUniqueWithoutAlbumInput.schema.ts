import { z } from 'zod';
import { AlbumAvailableMarketWhereUniqueInputObjectSchema } from './AlbumAvailableMarketWhereUniqueInput.schema';
import { AlbumAvailableMarketUpdateWithoutAlbumInputObjectSchema } from './AlbumAvailableMarketUpdateWithoutAlbumInput.schema';
import { AlbumAvailableMarketUncheckedUpdateWithoutAlbumInputObjectSchema } from './AlbumAvailableMarketUncheckedUpdateWithoutAlbumInput.schema';
import { AlbumAvailableMarketCreateWithoutAlbumInputObjectSchema } from './AlbumAvailableMarketCreateWithoutAlbumInput.schema';
import { AlbumAvailableMarketUncheckedCreateWithoutAlbumInputObjectSchema } from './AlbumAvailableMarketUncheckedCreateWithoutAlbumInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumAvailableMarketUpsertWithWhereUniqueWithoutAlbumInput> =
  z
    .object({
      where: z.lazy(() => AlbumAvailableMarketWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => AlbumAvailableMarketUpdateWithoutAlbumInputObjectSchema),
        z.lazy(
          () =>
            AlbumAvailableMarketUncheckedUpdateWithoutAlbumInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => AlbumAvailableMarketCreateWithoutAlbumInputObjectSchema),
        z.lazy(
          () =>
            AlbumAvailableMarketUncheckedCreateWithoutAlbumInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AlbumAvailableMarketUpsertWithWhereUniqueWithoutAlbumInputObjectSchema =
  Schema;
