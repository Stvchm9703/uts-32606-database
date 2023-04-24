import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AlbumAvailableMarketCountOrderByAggregateInputObjectSchema } from './AlbumAvailableMarketCountOrderByAggregateInput.schema';
import { AlbumAvailableMarketAvgOrderByAggregateInputObjectSchema } from './AlbumAvailableMarketAvgOrderByAggregateInput.schema';
import { AlbumAvailableMarketMaxOrderByAggregateInputObjectSchema } from './AlbumAvailableMarketMaxOrderByAggregateInput.schema';
import { AlbumAvailableMarketMinOrderByAggregateInputObjectSchema } from './AlbumAvailableMarketMinOrderByAggregateInput.schema';
import { AlbumAvailableMarketSumOrderByAggregateInputObjectSchema } from './AlbumAvailableMarketSumOrderByAggregateInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumAvailableMarketOrderByWithAggregationInput> =
  z
    .object({
      albumId: z.lazy(() => SortOrderSchema).optional(),
      tagId: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => AlbumAvailableMarketCountOrderByAggregateInputObjectSchema)
        .optional(),
      _avg: z
        .lazy(() => AlbumAvailableMarketAvgOrderByAggregateInputObjectSchema)
        .optional(),
      _max: z
        .lazy(() => AlbumAvailableMarketMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => AlbumAvailableMarketMinOrderByAggregateInputObjectSchema)
        .optional(),
      _sum: z
        .lazy(() => AlbumAvailableMarketSumOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();

export const AlbumAvailableMarketOrderByWithAggregationInputObjectSchema =
  Schema;
