import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ArtistInGenresCountOrderByAggregateInputObjectSchema } from './ArtistInGenresCountOrderByAggregateInput.schema';
import { ArtistInGenresAvgOrderByAggregateInputObjectSchema } from './ArtistInGenresAvgOrderByAggregateInput.schema';
import { ArtistInGenresMaxOrderByAggregateInputObjectSchema } from './ArtistInGenresMaxOrderByAggregateInput.schema';
import { ArtistInGenresMinOrderByAggregateInputObjectSchema } from './ArtistInGenresMinOrderByAggregateInput.schema';
import { ArtistInGenresSumOrderByAggregateInputObjectSchema } from './ArtistInGenresSumOrderByAggregateInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistInGenresOrderByWithAggregationInput> = z
  .object({
    artistId: z.lazy(() => SortOrderSchema).optional(),
    tagId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ArtistInGenresCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => ArtistInGenresAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ArtistInGenresMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ArtistInGenresMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => ArtistInGenresSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ArtistInGenresOrderByWithAggregationInputObjectSchema = Schema;
