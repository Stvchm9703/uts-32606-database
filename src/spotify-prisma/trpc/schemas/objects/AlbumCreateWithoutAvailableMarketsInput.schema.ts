import { z } from 'zod';
import { AlbumProduceByArtistCreateNestedManyWithoutAlbumInputObjectSchema } from './AlbumProduceByArtistCreateNestedManyWithoutAlbumInput.schema';
import { TrackCreateNestedManyWithoutAlbumInputObjectSchema } from './TrackCreateNestedManyWithoutAlbumInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumCreateWithoutAvailableMarketsInput> = z
  .object({
    albumType: z.string(),
    totalTracks: z.number(),
    name: z.string(),
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
