import { z } from 'zod';
import { AlbumAvailableMarketCreateNestedManyWithoutAlbumInputObjectSchema } from './AlbumAvailableMarketCreateNestedManyWithoutAlbumInput.schema';
import { TrackCreateNestedManyWithoutAlbumInputObjectSchema } from './TrackCreateNestedManyWithoutAlbumInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumCreateWithoutArtistsInput> = z
  .object({
    albumType: z.string(),
    totalTracks: z.number(),
    name: z.string(),
    imageUrl: z.string().optional().nullable(),
    availableMarkets: z
      .lazy(
        () => AlbumAvailableMarketCreateNestedManyWithoutAlbumInputObjectSchema,
      )
      .optional(),
    Tracks: z
      .lazy(() => TrackCreateNestedManyWithoutAlbumInputObjectSchema)
      .optional(),
  })
  .strict();

export const AlbumCreateWithoutArtistsInputObjectSchema = Schema;
