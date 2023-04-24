import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistOnFollowingCountOrderByAggregateInput> = z
  .object({
    artistId: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ArtistOnFollowingCountOrderByAggregateInputObjectSchema = Schema;