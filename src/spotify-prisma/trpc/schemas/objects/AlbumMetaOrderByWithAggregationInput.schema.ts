import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AlbumMetaCountOrderByAggregateInputObjectSchema } from './AlbumMetaCountOrderByAggregateInput.schema';
import { AlbumMetaAvgOrderByAggregateInputObjectSchema } from './AlbumMetaAvgOrderByAggregateInput.schema';
import { AlbumMetaMaxOrderByAggregateInputObjectSchema } from './AlbumMetaMaxOrderByAggregateInput.schema';
import { AlbumMetaMinOrderByAggregateInputObjectSchema } from './AlbumMetaMinOrderByAggregateInput.schema';
import { AlbumMetaSumOrderByAggregateInputObjectSchema } from './AlbumMetaSumOrderByAggregateInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumMetaOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    uid: z.lazy(() => SortOrderSchema).optional(),
    releaseDate: z.lazy(() => SortOrderSchema).optional(),
    releaseDatePrecision: z.lazy(() => SortOrderSchema).optional(),
    copyrights: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => AlbumMetaCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => AlbumMetaAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => AlbumMetaMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => AlbumMetaMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => AlbumMetaSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const AlbumMetaOrderByWithAggregationInputObjectSchema = Schema;
