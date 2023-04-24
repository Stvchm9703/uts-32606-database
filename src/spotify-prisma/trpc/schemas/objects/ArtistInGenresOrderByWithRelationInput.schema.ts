import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ArtistOrderByWithRelationInputObjectSchema } from './ArtistOrderByWithRelationInput.schema';
import { TagOrderByWithRelationInputObjectSchema } from './TagOrderByWithRelationInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistInGenresOrderByWithRelationInput> = z
  .object({
    artistId: z.lazy(() => SortOrderSchema).optional(),
    tagId: z.lazy(() => SortOrderSchema).optional(),
    Artist: z.lazy(() => ArtistOrderByWithRelationInputObjectSchema).optional(),
    Tag: z.lazy(() => TagOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const ArtistInGenresOrderByWithRelationInputObjectSchema = Schema;
