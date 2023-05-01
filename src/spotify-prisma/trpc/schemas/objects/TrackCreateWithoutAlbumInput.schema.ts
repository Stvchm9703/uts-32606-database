import { z } from 'zod';
import { TracksAvailableMarketCreateNestedManyWithoutTrackInputObjectSchema } from './TracksAvailableMarketCreateNestedManyWithoutTrackInput.schema';
import { TrackProduceByArtistCreateNestedManyWithoutTrackInputObjectSchema } from './TrackProduceByArtistCreateNestedManyWithoutTrackInput.schema';
import { TracksOnPlaylistCreateNestedManyWithoutTrackInputObjectSchema } from './TracksOnPlaylistCreateNestedManyWithoutTrackInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackCreateWithoutAlbumInput> = z
  .object({
    name: z.string(),
    discNumber: z.number(),
    popularity: z.number().optional().nullable(),
    previewUrl: z.string().optional().nullable(),
    trackNumber: z.number(),
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
