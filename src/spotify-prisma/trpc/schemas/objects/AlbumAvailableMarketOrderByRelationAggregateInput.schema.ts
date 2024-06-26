import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumAvailableMarketOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const AlbumAvailableMarketOrderByRelationAggregateInputObjectSchema =
  Schema;
