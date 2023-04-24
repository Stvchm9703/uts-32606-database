import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AlbumOrderByWithRelationInputObjectSchema } from './AlbumOrderByWithRelationInput.schema';
import { TagOrderByWithRelationInputObjectSchema } from './TagOrderByWithRelationInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumAvailableMarketOrderByWithRelationInput> = z
  .object({
    albumId: z.lazy(() => SortOrderSchema).optional(),
    tagId: z.lazy(() => SortOrderSchema).optional(),
    Album: z.lazy(() => AlbumOrderByWithRelationInputObjectSchema).optional(),
    Tag: z.lazy(() => TagOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const AlbumAvailableMarketOrderByWithRelationInputObjectSchema = Schema;
