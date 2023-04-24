import { z } from 'zod';
import { TracksAvailableMarketCreateNestedManyWithoutTrackInputObjectSchema } from './TracksAvailableMarketCreateNestedManyWithoutTrackInput.schema';
import { TrackProduceByArtistCreateNestedManyWithoutTrackInputObjectSchema } from './TrackProduceByArtistCreateNestedManyWithoutTrackInput.schema';
import { TracksOnPlaylistCreateNestedManyWithoutTrackInputObjectSchema } from './TracksOnPlaylistCreateNestedManyWithoutTrackInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackCreateWithoutAlbumInput> = z
  .object({
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    uid: z.string(),
    name: z.string(),
    discNumber: z.number(),
    durationMs: z.number(),
    explicit: z.boolean(),
    popularity: z.number().optional().nullable(),
    previewUrl: z.string().optional().nullable(),
    trackNumber: z.number(),
    isLocal: z.boolean(),
    availableMarkets: z
      .lazy(
        () =>
          TracksAvailableMarketCreateNestedManyWithoutTrackInputObjectSchema,
      )
      .optional(),
    Artists: z
      .lazy(
        () => TrackProduceByArtistCreateNestedManyWithoutTrackInputObjectSchema,
      )
      .optional(),
    InPlaylist: z
      .lazy(() => TracksOnPlaylistCreateNestedManyWithoutTrackInputObjectSchema)
      .optional(),
  })
  .strict();

export const TrackCreateWithoutAlbumInputObjectSchema = Schema;
