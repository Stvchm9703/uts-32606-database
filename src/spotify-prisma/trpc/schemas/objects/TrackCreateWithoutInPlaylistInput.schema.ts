import { z } from 'zod';
import { TracksAvailableMarketCreateNestedManyWithoutTrackInputObjectSchema } from './TracksAvailableMarketCreateNestedManyWithoutTrackInput.schema';
import { TrackProduceByArtistCreateNestedManyWithoutTrackInputObjectSchema } from './TrackProduceByArtistCreateNestedManyWithoutTrackInput.schema';
import { AlbumCreateNestedOneWithoutTracksInputObjectSchema } from './AlbumCreateNestedOneWithoutTracksInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackCreateWithoutInPlaylistInput> = z
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
    Album: z
      .lazy(() => AlbumCreateNestedOneWithoutTracksInputObjectSchema)
      .optional(),
  })
  .strict();

export const TrackCreateWithoutInPlaylistInputObjectSchema = Schema;
