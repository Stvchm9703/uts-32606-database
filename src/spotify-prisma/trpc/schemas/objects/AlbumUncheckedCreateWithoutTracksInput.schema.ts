import { z } from 'zod';
import { AlbumAvailableMarketUncheckedCreateNestedManyWithoutAlbumInputObjectSchema } from './AlbumAvailableMarketUncheckedCreateNestedManyWithoutAlbumInput.schema';
import { AlbumProduceByArtistUncheckedCreateNestedManyWithoutAlbumInputObjectSchema } from './AlbumProduceByArtistUncheckedCreateNestedManyWithoutAlbumInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumUncheckedCreateWithoutTracksInput> = z
  .object({
    id: z.number().optional(),
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
        () =>
          AlbumAvailableMarketUncheckedCreateNestedManyWithoutAlbumInputObjectSchema,
      )
      .optional(),
    Artists: z
      .lazy(
        () =>
          AlbumProduceByArtistUncheckedCreateNestedManyWithoutAlbumInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AlbumUncheckedCreateWithoutTracksInputObjectSchema = Schema;
