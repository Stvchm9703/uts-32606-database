import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumAvailableMarketSumOrderByAggregateInput> = z
  .object({
    albumId: z.lazy(() => SortOrderSchema).optional(),
    tagId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const AlbumAvailableMarketSumOrderByAggregateInputObjectSchema = Schema;
