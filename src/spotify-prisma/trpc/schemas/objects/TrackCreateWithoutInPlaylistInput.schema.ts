import { z } from 'zod';
import { TracksAvailableMarketCreateNestedManyWithoutTrackInputObjectSchema } from './TracksAvailableMarketCreateNestedManyWithoutTrackInput.schema';
import { TrackProduceByArtistCreateNestedManyWithoutTrackInputObjectSchema } from './TrackProduceByArtistCreateNestedManyWithoutTrackInput.schema';
import { AlbumCreateNestedOneWithoutTracksInputObjectSchema } from './AlbumCreateNestedOneWithoutTracksInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackCreateWithoutInPlaylistInput> = z
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
    Album: z
      .lazy(() => AlbumCreateNestedOneWithoutTracksInputObjectSchema)
      .optional(),
  })
  .strict();

export const TrackCreateWithoutInPlaylistInputObjectSchema = Schema;
