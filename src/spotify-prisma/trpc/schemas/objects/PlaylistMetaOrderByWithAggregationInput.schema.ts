import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PlaylistMetaCountOrderByAggregateInputObjectSchema } from './PlaylistMetaCountOrderByAggregateInput.schema';
import { PlaylistMetaAvgOrderByAggregateInputObjectSchema } from './PlaylistMetaAvgOrderByAggregateInput.schema';
import { PlaylistMetaMaxOrderByAggregateInputObjectSchema } from './PlaylistMetaMaxOrderByAggregateInput.schema';
import { PlaylistMetaMinOrderByAggregateInputObjectSchema } from './PlaylistMetaMinOrderByAggregateInput.schema';
import { PlaylistMetaSumOrderByAggregateInputObjectSchema } from './PlaylistMetaSumOrderByAggregateInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistMetaOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    uid: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => PlaylistMetaCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => PlaylistMetaAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => PlaylistMetaMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => PlaylistMetaMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => PlaylistMetaSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const PlaylistMetaOrderByWithAggregationInputObjectSchema = Schema;
