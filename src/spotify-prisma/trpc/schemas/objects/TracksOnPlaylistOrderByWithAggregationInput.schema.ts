import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TracksOnPlaylistCountOrderByAggregateInputObjectSchema } from './TracksOnPlaylistCountOrderByAggregateInput.schema';
import { TracksOnPlaylistAvgOrderByAggregateInputObjectSchema } from './TracksOnPlaylistAvgOrderByAggregateInput.schema';
import { TracksOnPlaylistMaxOrderByAggregateInputObjectSchema } from './TracksOnPlaylistMaxOrderByAggregateInput.schema';
import { TracksOnPlaylistMinOrderByAggregateInputObjectSchema } from './TracksOnPlaylistMinOrderByAggregateInput.schema';
import { TracksOnPlaylistSumOrderByAggregateInputObjectSchema } from './TracksOnPlaylistSumOrderByAggregateInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksOnPlaylistOrderByWithAggregationInput> = z
  .object({
    playlistId: z.lazy(() => SortOrderSchema).optional(),
    trackId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => TracksOnPlaylistCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => TracksOnPlaylistAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => TracksOnPlaylistMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => TracksOnPlaylistMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => TracksOnPlaylistSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const TracksOnPlaylistOrderByWithAggregationInputObjectSchema = Schema;
