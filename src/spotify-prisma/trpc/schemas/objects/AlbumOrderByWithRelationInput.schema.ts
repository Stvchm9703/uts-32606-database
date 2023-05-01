import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AlbumAvailableMarketOrderByRelationAggregateInputObjectSchema } from './AlbumAvailableMarketOrderByRelationAggregateInput.schema';
import { AlbumProduceByArtistOrderByRelationAggregateInputObjectSchema } from './AlbumProduceByArtistOrderByRelationAggregateInput.schema';
import { TrackOrderByRelationAggregateInputObjectSchema } from './TrackOrderByRelationAggregateInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    albumType: z.lazy(() => SortOrderSchema).optional(),
    totalTracks: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    imageUrl: z.lazy(() => SortOrderSchema).optional(),
    availableMarkets: z
      .lazy(() => AlbumAvailableMarketOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Artists: z
      .lazy(() => AlbumProduceByArtistOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Tracks: z
      .lazy(() => TrackOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const AlbumOrderByWithRelationInputObjectSchema = Schema;
