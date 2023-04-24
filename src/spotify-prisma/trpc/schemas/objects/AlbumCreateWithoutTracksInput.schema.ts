import { z } from 'zod';
import { AlbumAvailableMarketCreateNestedManyWithoutAlbumInputObjectSchema } from './AlbumAvailableMarketCreateNestedManyWithoutAlbumInput.schema';
import { AlbumProduceByArtistCreateNestedManyWithoutAlbumInputObjectSchema } from './AlbumProduceByArtistCreateNestedManyWithoutAlbumInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumCreateWithoutTracksInput> = z
  .object({
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    uid: z.string(),
    albumType: z.string(),
    totalTracks: z.number(),
    name: z.string(),
    releaseDate: z.date(),
    releaseDatePrecision: z.string(),
    albumGroup: z.string(),
    copyrights: z.string().optional().nullable(),
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
