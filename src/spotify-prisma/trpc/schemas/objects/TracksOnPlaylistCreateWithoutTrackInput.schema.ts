import { z } from 'zod';
import { PlaylistCreateNestedOneWithoutTracksInputObjectSchema } from './PlaylistCreateNestedOneWithoutTracksInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksOnPlaylistCreateWithoutTrackInput> = z
  .object({
    Playlist: z.lazy(
      () => PlaylistCreateNestedOneWithoutTracksInputObjectSchema,
    ),
  })
  .strict();

export const TracksOnPlaylistCreateWithoutTrackInputObjectSchema = Schema;
