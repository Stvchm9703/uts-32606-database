import { z } from 'zod';
import { PlaylistUpdateOneRequiredWithoutTracksNestedInputObjectSchema } from './PlaylistUpdateOneRequiredWithoutTracksNestedInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksOnPlaylistUpdateWithoutTrackInput> = z
  .object({
    Playlist: z
      .lazy(() => PlaylistUpdateOneRequiredWithoutTracksNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const TracksOnPlaylistUpdateWithoutTrackInputObjectSchema = Schema;
