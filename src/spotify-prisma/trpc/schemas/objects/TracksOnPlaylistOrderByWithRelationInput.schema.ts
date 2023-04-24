import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PlaylistOrderByWithRelationInputObjectSchema } from './PlaylistOrderByWithRelationInput.schema';
import { TrackOrderByWithRelationInputObjectSchema } from './TrackOrderByWithRelationInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksOnPlaylistOrderByWithRelationInput> = z
  .object({
    playlistId: z.lazy(() => SortOrderSchema).optional(),
    trackId: z.lazy(() => SortOrderSchema).optional(),
    Playlist: z
      .lazy(() => PlaylistOrderByWithRelationInputObjectSchema)
      .optional(),
    Track: z.lazy(() => TrackOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const TracksOnPlaylistOrderByWithRelationInputObjectSchema = Schema;
