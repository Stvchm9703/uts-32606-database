import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AlbumCountOrderByAggregateInputObjectSchema } from './AlbumCountOrderByAggregateInput.schema';
import { AlbumAvgOrderByAggregateInputObjectSchema } from './AlbumAvgOrderByAggregateInput.schema';
import { AlbumMaxOrderByAggregateInputObjectSchema } from './AlbumMaxOrderByAggregateInput.schema';
import { AlbumMinOrderByAggregateInputObjectSchema } from './AlbumMinOrderByAggregateInput.schema';
import { AlbumSumOrderByAggregateInputObjectSchema } from './AlbumSumOrderByAggregateInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    albumType: z.lazy(() => SortOrderSchema).optional(),
    totalTracks: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    imageUrl: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => AlbumCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => AlbumAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => AlbumMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => AlbumMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => AlbumSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const AlbumOrderByWithAggregationInputObjectSchema = Schema;
