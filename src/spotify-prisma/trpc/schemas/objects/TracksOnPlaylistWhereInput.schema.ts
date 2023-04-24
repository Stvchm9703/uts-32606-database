import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { PlaylistRelationFilterObjectSchema } from './PlaylistRelationFilter.schema';
import { PlaylistWhereInputObjectSchema } from './PlaylistWhereInput.schema';
import { TrackRelationFilterObjectSchema } from './TrackRelationFilter.schema';
import { TrackWhereInputObjectSchema } from './TrackWhereInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksOnPlaylistWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TracksOnPlaylistWhereInputObjectSchema),
        z.lazy(() => TracksOnPlaylistWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TracksOnPlaylistWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TracksOnPlaylistWhereInputObjectSchema),
        z.lazy(() => TracksOnPlaylistWhereInputObjectSchema).array(),
      ])
      .optional(),
    playlistId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    trackId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    Playlist: z
      .union([
        z.lazy(() => PlaylistRelationFilterObjectSchema),
        z.lazy(() => PlaylistWhereInputObjectSchema),
      ])
      .optional(),
    Track: z
      .union([
        z.lazy(() => TrackRelationFilterObjectSchema),
        z.lazy(() => TrackWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const TracksOnPlaylistWhereInputObjectSchema = Schema;
