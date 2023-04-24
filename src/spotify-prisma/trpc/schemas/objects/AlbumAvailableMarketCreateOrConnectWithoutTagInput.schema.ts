import { z } from 'zod';
import { AlbumAvailableMarketWhereUniqueInputObjectSchema } from './AlbumAvailableMarketWhereUniqueInput.schema';
import { AlbumAvailableMarketCreateWithoutTagInputObjectSchema } from './AlbumAvailableMarketCreateWithoutTagInput.schema';
import { AlbumAvailableMarketUncheckedCreateWithoutTagInputObjectSchema } from './AlbumAvailableMarketUncheckedCreateWithoutTagInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumAvailableMarketCreateOrConnectWithoutTagInput> =
  z
    .object({
      where: z.lazy(() => AlbumAvailableMarketWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => AlbumAvailableMarketCreateWithoutTagInputObjectSchema),
        z.lazy(
          () => AlbumAvailableMarketUncheckedCreateWithoutTagInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AlbumAvailableMarketCreateOrConnectWithoutTagInputObjectSchema =
  Schema;
