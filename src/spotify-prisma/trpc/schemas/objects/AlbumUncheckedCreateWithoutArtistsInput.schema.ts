import { z } from 'zod';
import { AlbumAvailableMarketUncheckedCreateNestedManyWithoutAlbumInputObjectSchema } from './AlbumAvailableMarketUncheckedCreateNestedManyWithoutAlbumInput.schema';
import { TrackUncheckedCreateNestedManyWithoutAlbumInputObjectSchema } from './TrackUncheckedCreateNestedManyWithoutAlbumInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumUncheckedCreateWithoutArtistsInput> = z
  .object({
    id: z.number().optional(),
    albumType: z.string(),
    totalTracks: z.number(),
    name: z.string(),
    imageUrl: z.string().optional().nullable(),
    availableMarkets: z
      .lazy(
        () =>
          AlbumAvailableMarketUncheckedCreateNestedManyWithoutAlbumInputObjectSchema,
      )
      .optional(),
    Tracks: z
      .lazy(() => TrackUncheckedCreateNestedManyWithoutAlbumInputObjectSchema)
      .optional(),
  })
  .strict();

export const AlbumUncheckedCreateWithoutArtistsInputObjectSchema = Schema;
