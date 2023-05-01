import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PlaylistCountOrderByAggregateInputObjectSchema } from './PlaylistCountOrderByAggregateInput.schema';
import { PlaylistAvgOrderByAggregateInputObjectSchema } from './PlaylistAvgOrderByAggregateInput.schema';
import { PlaylistMaxOrderByAggregateInputObjectSchema } from './PlaylistMaxOrderByAggregateInput.schema';
import { PlaylistMinOrderByAggregateInputObjectSchema } from './PlaylistMinOrderByAggregateInput.schema';
import { PlaylistSumOrderByAggregateInputObjectSchema } from './PlaylistSumOrderByAggregateInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    public: z.lazy(() => SortOrderSchema).optional(),
    primaryColor: z.lazy(() => SortOrderSchema).optional(),
    imagesId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => PlaylistCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => PlaylistAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => PlaylistMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => PlaylistMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => PlaylistSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const PlaylistOrderByWithAggregationInputObjectSchema = Schema;
