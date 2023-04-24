import { z } from 'zod';
import { PlaylistUpdateOneRequiredWithoutTracksNestedInputObjectSchema } from './PlaylistUpdateOneRequiredWithoutTracksNestedInput.schema';
import { TrackUpdateOneRequiredWithoutInPlaylistNestedInputObjectSchema } from './TrackUpdateOneRequiredWithoutInPlaylistNestedInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksOnPlaylistUpdateInput> = z
  .object({
    Playlist: z
      .lazy(() => PlaylistUpdateOneRequiredWithoutTracksNestedInputObjectSchema)
      .optional(),
    Track: z
      .lazy(
        () => TrackUpdateOneRequiredWithoutInPlaylistNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TracksOnPlaylistUpdateInputObjectSchema = Schema;
