import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackAvgOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    discNumber: z.lazy(() => SortOrderSchema).optional(),
    durationMs: z.lazy(() => SortOrderSchema).optional(),
    popularity: z.lazy(() => SortOrderSchema).optional(),
    trackNumber: z.lazy(() => SortOrderSchema).optional(),
    albumId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const TrackAvgOrderByAggregateInputObjectSchema = Schema;
