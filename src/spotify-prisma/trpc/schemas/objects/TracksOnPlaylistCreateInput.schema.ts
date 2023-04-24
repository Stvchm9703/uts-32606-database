import { z } from 'zod';
import { PlaylistCreateNestedOneWithoutTracksInputObjectSchema } from './PlaylistCreateNestedOneWithoutTracksInput.schema';
import { TrackCreateNestedOneWithoutInPlaylistInputObjectSchema } from './TrackCreateNestedOneWithoutInPlaylistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksOnPlaylistCreateInput> = z
  .object({
    Playlist: z.lazy(
      () => PlaylistCreateNestedOneWithoutTracksInputObjectSchema,
    ),
    Track: z.lazy(() => TrackCreateNestedOneWithoutInPlaylistInputObjectSchema),
  })
  .strict();

export const TracksOnPlaylistCreateInputObjectSchema = Schema;
