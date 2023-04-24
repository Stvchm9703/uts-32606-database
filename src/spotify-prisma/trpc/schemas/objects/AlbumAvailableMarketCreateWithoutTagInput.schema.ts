import { z } from 'zod';
import { AlbumCreateNestedOneWithoutAvailableMarketsInputObjectSchema } from './AlbumCreateNestedOneWithoutAvailableMarketsInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumAvailableMarketCreateWithoutTagInput> = z
  .object({
    Album: z.lazy(
      () => AlbumCreateNestedOneWithoutAvailableMarketsInputObjectSchema,
    ),
  })
  .strict();

export const AlbumAvailableMarketCreateWithoutTagInputObjectSchema = Schema;
