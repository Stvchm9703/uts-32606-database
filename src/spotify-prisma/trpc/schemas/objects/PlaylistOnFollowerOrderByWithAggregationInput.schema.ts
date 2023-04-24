import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PlaylistOnFollowerCountOrderByAggregateInputObjectSchema } from './PlaylistOnFollowerCountOrderByAggregateInput.schema';
import { PlaylistOnFollowerAvgOrderByAggregateInputObjectSchema } from './PlaylistOnFollowerAvgOrderByAggregateInput.schema';
import { PlaylistOnFollowerMaxOrderByAggregateInputObjectSchema } from './PlaylistOnFollowerMaxOrderByAggregateInput.schema';
import { PlaylistOnFollowerMinOrderByAggregateInputObjectSchema } from './PlaylistOnFollowerMinOrderByAggregateInput.schema';
import { PlaylistOnFollowerSumOrderByAggregateInputObjectSchema } from './PlaylistOnFollowerSumOrderByAggregateInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistOnFollowerOrderByWithAggregationInput> =
  z
    .object({
      playlistId: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => PlaylistOnFollowerCountOrderByAggregateInputObjectSchema)
        .optional(),
      _avg: z
        .lazy(() => PlaylistOnFollowerAvgOrderByAggregateInputObjectSchema)
        .optional(),
      _max: z
        .lazy(() => PlaylistOnFollowerMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => PlaylistOnFollowerMinOrderByAggregateInputObjectSchema)
        .optional(),
      _sum: z
        .lazy(() => PlaylistOnFollowerSumOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();

export const PlaylistOnFollowerOrderByWithAggregationInputObjectSchema = Schema;
