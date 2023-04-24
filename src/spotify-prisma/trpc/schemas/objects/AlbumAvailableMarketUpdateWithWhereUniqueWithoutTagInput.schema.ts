import { z } from 'zod';
import { AlbumAvailableMarketWhereUniqueInputObjectSchema } from './AlbumAvailableMarketWhereUniqueInput.schema';
import { AlbumAvailableMarketUpdateWithoutTagInputObjectSchema } from './AlbumAvailableMarketUpdateWithoutTagInput.schema';
import { AlbumAvailableMarketUncheckedUpdateWithoutTagInputObjectSchema } from './AlbumAvailableMarketUncheckedUpdateWithoutTagInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumAvailableMarketUpdateWithWhereUniqueWithoutTagInput> =
  z
    .object({
      where: z.lazy(() => AlbumAvailableMarketWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => AlbumAvailableMarketUpdateWithoutTagInputObjectSchema),
        z.lazy(
          () => AlbumAvailableMarketUncheckedUpdateWithoutTagInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AlbumAvailableMarketUpdateWithWhereUniqueWithoutTagInputObjectSchema =
  Schema;
