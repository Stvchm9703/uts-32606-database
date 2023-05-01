import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumMetaCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    uid: z.lazy(() => SortOrderSchema).optional(),
    releaseDate: z.lazy(() => SortOrderSchema).optional(),
    releaseDatePrecision: z.lazy(() => SortOrderSchema).optional(),
    copyrights: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const AlbumMetaCountOrderByAggregateInputObjectSchema = Schema;
