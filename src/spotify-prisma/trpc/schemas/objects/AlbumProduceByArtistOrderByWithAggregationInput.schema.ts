import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AlbumProduceByArtistCountOrderByAggregateInputObjectSchema } from './AlbumProduceByArtistCountOrderByAggregateInput.schema';
import { AlbumProduceByArtistAvgOrderByAggregateInputObjectSchema } from './AlbumProduceByArtistAvgOrderByAggregateInput.schema';
import { AlbumProduceByArtistMaxOrderByAggregateInputObjectSchema } from './AlbumProduceByArtistMaxOrderByAggregateInput.schema';
import { AlbumProduceByArtistMinOrderByAggregateInputObjectSchema } from './AlbumProduceByArtistMinOrderByAggregateInput.schema';
import { AlbumProduceByArtistSumOrderByAggregateInputObjectSchema } from './AlbumProduceByArtistSumOrderByAggregateInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumProduceByArtistOrderByWithAggregationInput> =
  z
    .object({
      albumId: z.lazy(() => SortOrderSchema).optional(),
      artistId: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => AlbumProduceByArtistCountOrderByAggregateInputObjectSchema)
        .optional(),
      _avg: z
        .lazy(() => AlbumProduceByArtistAvgOrderByAggregateInputObjectSchema)
        .optional(),
      _max: z
        .lazy(() => AlbumProduceByArtistMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => AlbumProduceByArtistMinOrderByAggregateInputObjectSchema)
        .optional(),
      _sum: z
        .lazy(() => AlbumProduceByArtistSumOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();

export const AlbumProduceByArtistOrderByWithAggregationInputObjectSchema =
  Schema;
