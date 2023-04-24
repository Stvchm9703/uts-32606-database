import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksAvailableMarketCountOrderByAggregateInput> =
  z
    .object({
      tagId: z.lazy(() => SortOrderSchema).optional(),
      trackId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const TracksAvailableMarketCountOrderByAggregateInputObjectSchema =
  Schema;
