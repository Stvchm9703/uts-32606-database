import { z } from 'zod';
import { AlbumProduceByArtistUncheckedCreateNestedManyWithoutAlbumInputObjectSchema } from './AlbumProduceByArtistUncheckedCreateNestedManyWithoutAlbumInput.schema';
import { TrackUncheckedCreateNestedManyWithoutAlbumInputObjectSchema } from './TrackUncheckedCreateNestedManyWithoutAlbumInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumUncheckedCreateWithoutAvailableMarketsInput> =
  z
    .object({
      id: z.number().optional(),
      albumType: z.string(),
      totalTracks: z.number(),
      name: z.string(),
      imageUrl: z.string().optional().nullable(),
      Artists: z
        .lazy(
          () =>
            AlbumProduceByArtistUncheckedCreateNestedManyWithoutAlbumInputObjectSchema,
        )
        .optional(),
      Tracks: z
        .lazy(() => TrackUncheckedCreateNestedManyWithoutAlbumInputObjectSchema)
        .optional(),
    })
    .strict();

export const AlbumUncheckedCreateWithoutAvailableMarketsInputObjectSchema =
  Schema;
