import { z } from 'zod';
import { AlbumAvailableMarketWhereInputObjectSchema } from './AlbumAvailableMarketWhereInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumAvailableMarketListRelationFilter> = z
  .object({
    every: z.lazy(() => AlbumAvailableMarketWhereInputObjectSchema).optional(),
    some: z.lazy(() => AlbumAvailableMarketWhereInputObjectSchema).optional(),
    none: z.lazy(() => AlbumAvailableMarketWhereInputObjectSchema).optional(),
  })
  .strict();

export const AlbumAvailableMarketListRelationFilterObjectSchema = Schema;
