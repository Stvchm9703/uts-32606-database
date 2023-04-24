import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumProduceByArtistSumOrderByAggregateInput> = z
  .object({
    albumId: z.lazy(() => SortOrderSchema).optional(),
    artistId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const AlbumProduceByArtistSumOrderByAggregateInputObjectSchema = Schema;
