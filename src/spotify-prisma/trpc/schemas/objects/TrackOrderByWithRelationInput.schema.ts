import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TracksAvailableMarketOrderByRelationAggregateInputObjectSchema } from './TracksAvailableMarketOrderByRelationAggregateInput.schema';
import { TrackProduceByArtistOrderByRelationAggregateInputObjectSchema } from './TrackProduceByArtistOrderByRelationAggregateInput.schema';
import { TracksOnPlaylistOrderByRelationAggregateInputObjectSchema } from './TracksOnPlaylistOrderByRelationAggregateInput.schema';
import { AlbumOrderByWithRelationInputObjectSchema } from './AlbumOrderByWithRelationInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    uid: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    discNumber: z.lazy(() => SortOrderSchema).optional(),
    durationMs: z.lazy(() => SortOrderSchema).optional(),
    explicit: z.lazy(() => SortOrderSchema).optional(),
    popularity: z.lazy(() => SortOrderSchema).optional(),
    previewUrl: z.lazy(() => SortOrderSchema).optional(),
    trackNumber: z.lazy(() => SortOrderSchema).optional(),
    isLocal: z.lazy(() => SortOrderSchema).optional(),
    albumId: z.lazy(() => SortOrderSchema).optional(),
    availableMarkets: z
      .lazy(
        () => TracksAvailableMarketOrderByRelationAggregateInputObjectSchema,
      )
      .optional(),
    Artists: z
      .lazy(() => TrackProduceByArtistOrderByRelationAggregateInputObjectSchema)
      .optional(),
    InPlaylist: z
      .lazy(() => TracksOnPlaylistOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Album: z.lazy(() => AlbumOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const TrackOrderByWithRelationInputObjectSchema = Schema;
