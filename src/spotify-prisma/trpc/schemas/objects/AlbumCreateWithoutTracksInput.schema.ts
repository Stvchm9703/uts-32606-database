import { z } from 'zod';
import { AlbumAvailableMarketCreateNestedManyWithoutAlbumInputObjectSchema } from './AlbumAvailableMarketCreateNestedManyWithoutAlbumInput.schema';
import { AlbumProduceByArtistCreateNestedManyWithoutAlbumInputObjectSchema } from './AlbumProduceByArtistCreateNestedManyWithoutAlbumInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumCreateWithoutTracksInput> = z
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
    Artists: z
      .lazy(
        () => AlbumProduceByArtistCreateNestedManyWithoutAlbumInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AlbumCreateWithoutTracksInputObjectSchema = Schema;
