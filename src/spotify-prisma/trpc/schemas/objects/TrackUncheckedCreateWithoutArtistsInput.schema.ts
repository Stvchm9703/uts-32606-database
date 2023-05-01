import { z } from 'zod';
import { TracksAvailableMarketUncheckedCreateNestedManyWithoutTrackInputObjectSchema } from './TracksAvailableMarketUncheckedCreateNestedManyWithoutTrackInput.schema';
import { TracksOnPlaylistUncheckedCreateNestedManyWithoutTrackInputObjectSchema } from './TracksOnPlaylistUncheckedCreateNestedManyWithoutTrackInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackUncheckedCreateWithoutArtistsInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    discNumber: z.number(),
    popularity: z.number().optional().nullable(),
    previewUrl: z.string().optional().nullable(),
    trackNumber: z.number(),
    albumId: z.number().optional().nullable(),
    availableMarkets: z
      .lazy(
        () =>
          TracksAvailableMarketUncheckedCreateNestedManyWithoutTrackInputObjectSchema,
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

export const TrackUncheckedCreateWithoutArtistsInputObjectSchema = Schema;
