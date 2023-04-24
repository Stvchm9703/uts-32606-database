import { z } from 'zod';
import { AlbumCreateNestedOneWithoutAvailableMarketsInputObjectSchema } from './AlbumCreateNestedOneWithoutAvailableMarketsInput.schema';
import { TagCreateNestedOneWithoutAlbumAvailableMarketInputObjectSchema } from './TagCreateNestedOneWithoutAlbumAvailableMarketInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumAvailableMarketCreateInput> = z
  .object({
    Album: z.lazy(
      () => AlbumCreateNestedOneWithoutAvailableMarketsInputObjectSchema,
    ),
    Tag: z.lazy(
      () => TagCreateNestedOneWithoutAlbumAvailableMarketInputObjectSchema,
    ),
  })
  .strict();

export const AlbumAvailableMarketCreateInputObjectSchema = Schema;
