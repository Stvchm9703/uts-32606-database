import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AlbumAvailableMarketOrderByRelationAggregateInputObjectSchema } from './AlbumAvailableMarketOrderByRelationAggregateInput.schema';
import { TracksAvailableMarketOrderByRelationAggregateInputObjectSchema } from './TracksAvailableMarketOrderByRelationAggregateInput.schema';
import { ArtistInGenresOrderByRelationAggregateInputObjectSchema } from './ArtistInGenresOrderByRelationAggregateInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TagOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    code: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    AlbumAvailableMarket: z
      .lazy(() => AlbumAvailableMarketOrderByRelationAggregateInputObjectSchema)
      .optional(),
    TracksAvailableMarket: z
      .lazy(
        () => TracksAvailableMarketOrderByRelationAggregateInputObjectSchema,
      )
      .optional(),
    ArtistInGenres: z
      .lazy(() => ArtistInGenresOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagOrderByWithRelationInputObjectSchema = Schema;
