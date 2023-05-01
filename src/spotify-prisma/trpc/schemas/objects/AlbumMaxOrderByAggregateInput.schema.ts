import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    albumType: z.lazy(() => SortOrderSchema).optional(),
    totalTracks: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    imageUrl: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const AlbumMaxOrderByAggregateInputObjectSchema = Schema;
