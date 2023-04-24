import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AlbumOrderByWithRelationInputObjectSchema } from './AlbumOrderByWithRelationInput.schema';
import { ArtistOrderByWithRelationInputObjectSchema } from './ArtistOrderByWithRelationInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumProduceByArtistOrderByWithRelationInput> = z
  .object({
    albumId: z.lazy(() => SortOrderSchema).optional(),
    artistId: z.lazy(() => SortOrderSchema).optional(),
    Album: z.lazy(() => AlbumOrderByWithRelationInputObjectSchema).optional(),
    Artist: z.lazy(() => ArtistOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const AlbumProduceByArtistOrderByWithRelationInputObjectSchema = Schema;
