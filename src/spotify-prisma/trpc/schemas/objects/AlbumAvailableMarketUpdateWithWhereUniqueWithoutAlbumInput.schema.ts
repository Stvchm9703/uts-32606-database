import { z } from 'zod';
import { AlbumAvailableMarketWhereUniqueInputObjectSchema } from './AlbumAvailableMarketWhereUniqueInput.schema';
import { AlbumAvailableMarketUpdateWithoutAlbumInputObjectSchema } from './AlbumAvailableMarketUpdateWithoutAlbumInput.schema';
import { AlbumAvailableMarketUncheckedUpdateWithoutAlbumInputObjectSchema } from './AlbumAvailableMarketUncheckedUpdateWithoutAlbumInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumAvailableMarketUpdateWithWhereUniqueWithoutAlbumInput> =
  z
    .object({
      where: z.lazy(() => AlbumAvailableMarketWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => AlbumAvailableMarketUpdateWithoutAlbumInputObjectSchema),
        z.lazy(
          () =>
            AlbumAvailableMarketUncheckedUpdateWithoutAlbumInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AlbumAvailableMarketUpdateWithWhereUniqueWithoutAlbumInputObjectSchema =
  Schema;
