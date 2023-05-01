import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TrackMetaCountOrderByAggregateInputObjectSchema } from './TrackMetaCountOrderByAggregateInput.schema';
import { TrackMetaAvgOrderByAggregateInputObjectSchema } from './TrackMetaAvgOrderByAggregateInput.schema';
import { TrackMetaMaxOrderByAggregateInputObjectSchema } from './TrackMetaMaxOrderByAggregateInput.schema';
import { TrackMetaMinOrderByAggregateInputObjectSchema } from './TrackMetaMinOrderByAggregateInput.schema';
import { TrackMetaSumOrderByAggregateInputObjectSchema } from './TrackMetaSumOrderByAggregateInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackMetaOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    uid: z.lazy(() => SortOrderSchema).optional(),
    durationMs: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => TrackMetaCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => TrackMetaAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => TrackMetaMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => TrackMetaMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => TrackMetaSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const TrackMetaOrderByWithAggregationInputObjectSchema = Schema;
