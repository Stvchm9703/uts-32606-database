import { z } from 'zod';
import { AlbumProduceByArtistCreateNestedManyWithoutAlbumInputObjectSchema } from './AlbumProduceByArtistCreateNestedManyWithoutAlbumInput.schema';
import { TrackCreateNestedManyWithoutAlbumInputObjectSchema } from './TrackCreateNestedManyWithoutAlbumInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumCreateWithoutAvailableMarketsInput> = z
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
    Artists: z
      .lazy(
        () => AlbumProduceByArtistCreateNestedManyWithoutAlbumInputObjectSchema,
      )
      .optional(),
    Tracks: z
      .lazy(() => TrackCreateNestedManyWithoutAlbumInputObjectSchema)
      .optional(),
  })
  .strict();

export const AlbumCreateWithoutAvailableMarketsInputObjectSchema = Schema;