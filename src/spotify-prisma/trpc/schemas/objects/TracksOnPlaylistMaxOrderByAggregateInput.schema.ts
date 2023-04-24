import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksOnPlaylistMaxOrderByAggregateInput> = z
  .object({
    playlistId: z.lazy(() => SortOrderSchema).optional(),
    trackId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const TracksOnPlaylistMaxOrderByAggregateInputObjectSchema = Schema;
