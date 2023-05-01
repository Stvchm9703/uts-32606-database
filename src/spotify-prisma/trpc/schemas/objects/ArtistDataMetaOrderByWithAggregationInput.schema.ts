import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ArtistDataMetaCountOrderByAggregateInputObjectSchema } from './ArtistDataMetaCountOrderByAggregateInput.schema';
import { ArtistDataMetaAvgOrderByAggregateInputObjectSchema } from './ArtistDataMetaAvgOrderByAggregateInput.schema';
import { ArtistDataMetaMaxOrderByAggregateInputObjectSchema } from './ArtistDataMetaMaxOrderByAggregateInput.schema';
import { ArtistDataMetaMinOrderByAggregateInputObjectSchema } from './ArtistDataMetaMinOrderByAggregateInput.schema';
import { ArtistDataMetaSumOrderByAggregateInputObjectSchema } from './ArtistDataMetaSumOrderByAggregateInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistDataMetaOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    uid: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ArtistDataMetaCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => ArtistDataMetaAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ArtistDataMetaMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ArtistDataMetaMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => ArtistDataMetaSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ArtistDataMetaOrderByWithAggregationInputObjectSchema = Schema;
