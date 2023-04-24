import { z } from 'zod';
import { AlbumAvailableMarketScalarWhereInputObjectSchema } from './AlbumAvailableMarketScalarWhereInput.schema';
import { AlbumAvailableMarketUpdateManyMutationInputObjectSchema } from './AlbumAvailableMarketUpdateManyMutationInput.schema';
import { AlbumAvailableMarketUncheckedUpdateManyWithoutAlbumAvailableMarketInputObjectSchema } from './AlbumAvailableMarketUncheckedUpdateManyWithoutAlbumAvailableMarketInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumAvailableMarketUpdateManyWithWhereWithoutTagInput> =
  z
    .object({
      where: z.lazy(() => AlbumAvailableMarketScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => AlbumAvailableMarketUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            AlbumAvailableMarketUncheckedUpdateManyWithoutAlbumAvailableMarketInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AlbumAvailableMarketUpdateManyWithWhereWithoutTagInputObjectSchema =
  Schema;
