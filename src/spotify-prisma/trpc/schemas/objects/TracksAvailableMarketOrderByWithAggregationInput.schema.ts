import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TracksAvailableMarketCountOrderByAggregateInputObjectSchema } from './TracksAvailableMarketCountOrderByAggregateInput.schema';
import { TracksAvailableMarketAvgOrderByAggregateInputObjectSchema } from './TracksAvailableMarketAvgOrderByAggregateInput.schema';
import { TracksAvailableMarketMaxOrderByAggregateInputObjectSchema } from './TracksAvailableMarketMaxOrderByAggregateInput.schema';
import { TracksAvailableMarketMinOrderByAggregateInputObjectSchema } from './TracksAvailableMarketMinOrderByAggregateInput.schema';
import { TracksAvailableMarketSumOrderByAggregateInputObjectSchema } from './TracksAvailableMarketSumOrderByAggregateInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksAvailableMarketOrderByWithAggregationInput> =
  z
    .object({
      tagId: z.lazy(() => SortOrderSchema).optional(),
      trackId: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => TracksAvailableMarketCountOrderByAggregateInputObjectSchema)
        .optional(),
      _avg: z
        .lazy(() => TracksAvailableMarketAvgOrderByAggregateInputObjectSchema)
        .optional(),
      _max: z
        .lazy(() => TracksAvailableMarketMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => TracksAvailableMarketMinOrderByAggregateInputObjectSchema)
        .optional(),
      _sum: z
        .lazy(() => TracksAvailableMarketSumOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();

export const TracksAvailableMarketOrderByWithAggregationInputObjectSchema =
  Schema;
