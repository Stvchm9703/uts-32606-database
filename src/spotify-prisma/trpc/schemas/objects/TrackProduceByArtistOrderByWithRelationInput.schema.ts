import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TrackOrderByWithRelationInputObjectSchema } from './TrackOrderByWithRelationInput.schema';
import { ArtistOrderByWithRelationInputObjectSchema } from './ArtistOrderByWithRelationInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackProduceByArtistOrderByWithRelationInput> = z
  .object({
    trackId: z.lazy(() => SortOrderSchema).optional(),
    artistId: z.lazy(() => SortOrderSchema).optional(),
    Track: z.lazy(() => TrackOrderByWithRelationInputObjectSchema).optional(),
    Artists: z
      .lazy(() => ArtistOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const TrackProduceByArtistOrderByWithRelationInputObjectSchema = Schema;
