import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackProduceByArtistSumOrderByAggregateInput> = z
  .object({
    trackId: z.lazy(() => SortOrderSchema).optional(),
    artistId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const TrackProduceByArtistSumOrderByAggregateInputObjectSchema = Schema;
