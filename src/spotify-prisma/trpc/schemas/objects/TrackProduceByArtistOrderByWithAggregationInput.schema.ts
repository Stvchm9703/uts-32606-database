import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TrackProduceByArtistCountOrderByAggregateInputObjectSchema } from './TrackProduceByArtistCountOrderByAggregateInput.schema';
import { TrackProduceByArtistAvgOrderByAggregateInputObjectSchema } from './TrackProduceByArtistAvgOrderByAggregateInput.schema';
import { TrackProduceByArtistMaxOrderByAggregateInputObjectSchema } from './TrackProduceByArtistMaxOrderByAggregateInput.schema';
import { TrackProduceByArtistMinOrderByAggregateInputObjectSchema } from './TrackProduceByArtistMinOrderByAggregateInput.schema';
import { TrackProduceByArtistSumOrderByAggregateInputObjectSchema } from './TrackProduceByArtistSumOrderByAggregateInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackProduceByArtistOrderByWithAggregationInput> =
  z
    .object({
      trackId: z.lazy(() => SortOrderSchema).optional(),
      artistId: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => TrackProduceByArtistCountOrderByAggregateInputObjectSchema)
        .optional(),
      _avg: z
        .lazy(() => TrackProduceByArtistAvgOrderByAggregateInputObjectSchema)
        .optional(),
      _max: z
        .lazy(() => TrackProduceByArtistMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => TrackProduceByArtistMinOrderByAggregateInputObjectSchema)
        .optional(),
      _sum: z
        .lazy(() => TrackProduceByArtistSumOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();

export const TrackProduceByArtistOrderByWithAggregationInputObjectSchema =
  Schema;
