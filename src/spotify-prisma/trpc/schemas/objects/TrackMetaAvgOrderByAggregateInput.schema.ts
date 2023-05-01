import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackMetaAvgOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    durationMs: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const TrackMetaAvgOrderByAggregateInputObjectSchema = Schema;
