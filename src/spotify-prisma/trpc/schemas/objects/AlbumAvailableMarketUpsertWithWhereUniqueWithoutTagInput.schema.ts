import { z } from 'zod';
import { AlbumAvailableMarketWhereUniqueInputObjectSchema } from './AlbumAvailableMarketWhereUniqueInput.schema';
import { AlbumAvailableMarketUpdateWithoutTagInputObjectSchema } from './AlbumAvailableMarketUpdateWithoutTagInput.schema';
import { AlbumAvailableMarketUncheckedUpdateWithoutTagInputObjectSchema } from './AlbumAvailableMarketUncheckedUpdateWithoutTagInput.schema';
import { AlbumAvailableMarketCreateWithoutTagInputObjectSchema } from './AlbumAvailableMarketCreateWithoutTagInput.schema';
import { AlbumAvailableMarketUncheckedCreateWithoutTagInputObjectSchema } from './AlbumAvailableMarketUncheckedCreateWithoutTagInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumAvailableMarketUpsertWithWhereUniqueWithoutTagInput> =
  z
    .object({
      where: z.lazy(() => AlbumAvailableMarketWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => AlbumAvailableMarketUpdateWithoutTagInputObjectSchema),
        z.lazy(
          () => AlbumAvailableMarketUncheckedUpdateWithoutTagInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => AlbumAvailableMarketCreateWithoutTagInputObjectSchema),
        z.lazy(
          () => AlbumAvailableMarketUncheckedCreateWithoutTagInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AlbumAvailableMarketUpsertWithWhereUniqueWithoutTagInputObjectSchema =
  Schema;
