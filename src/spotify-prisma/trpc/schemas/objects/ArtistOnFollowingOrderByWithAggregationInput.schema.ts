import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ArtistOnFollowingCountOrderByAggregateInputObjectSchema } from './ArtistOnFollowingCountOrderByAggregateInput.schema';
import { ArtistOnFollowingAvgOrderByAggregateInputObjectSchema } from './ArtistOnFollowingAvgOrderByAggregateInput.schema';
import { ArtistOnFollowingMaxOrderByAggregateInputObjectSchema } from './ArtistOnFollowingMaxOrderByAggregateInput.schema';
import { ArtistOnFollowingMinOrderByAggregateInputObjectSchema } from './ArtistOnFollowingMinOrderByAggregateInput.schema';
import { ArtistOnFollowingSumOrderByAggregateInputObjectSchema } from './ArtistOnFollowingSumOrderByAggregateInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistOnFollowingOrderByWithAggregationInput> = z
  .object({
    artistId: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ArtistOnFollowingCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => ArtistOnFollowingAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ArtistOnFollowingMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ArtistOnFollowingMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => ArtistOnFollowingSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ArtistOnFollowingOrderByWithAggregationInputObjectSchema = Schema;
