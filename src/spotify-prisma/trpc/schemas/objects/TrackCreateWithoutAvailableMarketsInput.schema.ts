import { z } from 'zod';
import { TrackProduceByArtistCreateNestedManyWithoutTrackInputObjectSchema } from './TrackProduceByArtistCreateNestedManyWithoutTrackInput.schema';
import { TracksOnPlaylistCreateNestedManyWithoutTrackInputObjectSchema } from './TracksOnPlaylistCreateNestedManyWithoutTrackInput.schema';
import { AlbumCreateNestedOneWithoutTracksInputObjectSchema } from './AlbumCreateNestedOneWithoutTracksInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackCreateWithoutAvailableMarketsInput> = z
  .object({
    name: z.string(),
    discNumber: z.number(),
    popularity: z.number().optional().nullable(),
    previewUrl: z.string().optional().nullable(),
    trackNumber: z.number(),
    Artists: z
      .lazy(
        () => TrackProduceByArtistCreateNestedManyWithoutTrackInputObjectSchema,
      )
      .optional(),
    InPlaylist: z
      .lazy(() => TracksOnPlaylistCreateNestedManyWithoutTrackInputObjectSchema)
      .optional(),
    Album: z
      .lazy(() => AlbumCreateNestedOneWithoutTracksInputObjectSchema)
      .optional(),
  })
  .strict();

export const TrackCreateWithoutAvailableMarketsInputObjectSchema = Schema;
