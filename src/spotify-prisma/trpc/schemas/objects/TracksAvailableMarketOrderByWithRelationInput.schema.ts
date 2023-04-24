import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TagOrderByWithRelationInputObjectSchema } from './TagOrderByWithRelationInput.schema';
import { TrackOrderByWithRelationInputObjectSchema } from './TrackOrderByWithRelationInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksAvailableMarketOrderByWithRelationInput> =
  z
    .object({
      tagId: z.lazy(() => SortOrderSchema).optional(),
      trackId: z.lazy(() => SortOrderSchema).optional(),
      Tag: z.lazy(() => TagOrderByWithRelationInputObjectSchema).optional(),
      Track: z.lazy(() => TrackOrderByWithRelationInputObjectSchema).optional(),
    })
    .strict();

export const TracksAvailableMarketOrderByWithRelationInputObjectSchema = Schema;
