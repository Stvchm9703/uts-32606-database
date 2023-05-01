import { z } from 'zod';
import { TracksAvailableMarketUncheckedCreateNestedManyWithoutTrackInputObjectSchema } from './TracksAvailableMarketUncheckedCreateNestedManyWithoutTrackInput.schema';
import { TrackProduceByArtistUncheckedCreateNestedManyWithoutTrackInputObjectSchema } from './TrackProduceByArtistUncheckedCreateNestedManyWithoutTrackInput.schema';
import { TracksOnPlaylistUncheckedCreateNestedManyWithoutTrackInputObjectSchema } from './TracksOnPlaylistUncheckedCreateNestedManyWithoutTrackInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackUncheckedCreateWithoutAlbumInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    discNumber: z.number(),
    popularity: z.number().optional().nullable(),
    previewUrl: z.string().optional().nullable(),
    trackNumber: z.number(),
    availableMarkets: z
      .lazy(
        () =>
          TracksAvailableMarketUncheckedCreateNestedManyWithoutTrackInputObjectSchema,
      )
      .optional(),
    Artists: z
      .lazy(
        () =>
          TrackProduceByArtistUncheckedCreateNestedManyWithoutTrackInputObjectSchema,
      )
      .optional(),
    InPlaylist: z
      .lazy(
        () =>
          TracksOnPlaylistUncheckedCreateNestedManyWithoutTrackInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TrackUncheckedCreateWithoutAlbumInputObjectSchema = Schema;
