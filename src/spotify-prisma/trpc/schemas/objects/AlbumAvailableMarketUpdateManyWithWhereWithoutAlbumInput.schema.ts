import { z } from 'zod';
import { AlbumAvailableMarketScalarWhereInputObjectSchema } from './AlbumAvailableMarketScalarWhereInput.schema';
import { AlbumAvailableMarketUpdateManyMutationInputObjectSchema } from './AlbumAvailableMarketUpdateManyMutationInput.schema';
import { AlbumAvailableMarketUncheckedUpdateManyWithoutAvailableMarketsInputObjectSchema } from './AlbumAvailableMarketUncheckedUpdateManyWithoutAvailableMarketsInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumAvailableMarketUpdateManyWithWhereWithoutAlbumInput> =
  z
    .object({
      where: z.lazy(() => AlbumAvailableMarketScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => AlbumAvailableMarketUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            AlbumAvailableMarketUncheckedUpdateManyWithoutAvailableMarketsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AlbumAvailableMarketUpdateManyWithWhereWithoutAlbumInputObjectSchema =
  Schema;
