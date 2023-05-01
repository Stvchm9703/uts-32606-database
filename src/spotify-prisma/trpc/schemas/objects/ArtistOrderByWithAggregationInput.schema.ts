import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ArtistCountOrderByAggregateInputObjectSchema } from './ArtistCountOrderByAggregateInput.schema';
import { ArtistAvgOrderByAggregateInputObjectSchema } from './ArtistAvgOrderByAggregateInput.schema';
import { ArtistMaxOrderByAggregateInputObjectSchema } from './ArtistMaxOrderByAggregateInput.schema';
import { ArtistMinOrderByAggregateInputObjectSchema } from './ArtistMinOrderByAggregateInput.schema';
import { ArtistSumOrderByAggregateInputObjectSchema } from './ArtistSumOrderByAggregateInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    popularity: z.lazy(() => SortOrderSchema).optional(),
    imageUrl: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ArtistCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => ArtistAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ArtistMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ArtistMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ArtistSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ArtistOrderByWithAggregationInputObjectSchema = Schema;
