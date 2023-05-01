import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ArtistInGenresOrderByRelationAggregateInputObjectSchema } from './ArtistInGenresOrderByRelationAggregateInput.schema';
import { TrackProduceByArtistOrderByRelationAggregateInputObjectSchema } from './TrackProduceByArtistOrderByRelationAggregateInput.schema';
import { AlbumProduceByArtistOrderByRelationAggregateInputObjectSchema } from './AlbumProduceByArtistOrderByRelationAggregateInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    popularity: z.lazy(() => SortOrderSchema).optional(),
    imageUrl: z.lazy(() => SortOrderSchema).optional(),
    Genres: z
      .lazy(() => ArtistInGenresOrderByRelationAggregateInputObjectSchema)
      .optional(),
    TrackProduceByArtist: z
      .lazy(() => TrackProduceByArtistOrderByRelationAggregateInputObjectSchema)
      .optional(),
    AlbumProduceByArtist: z
      .lazy(() => AlbumProduceByArtistOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ArtistOrderByWithRelationInputObjectSchema = Schema;
