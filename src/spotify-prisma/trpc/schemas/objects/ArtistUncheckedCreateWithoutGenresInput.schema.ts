import { z } from 'zod';
import { TrackProduceByArtistUncheckedCreateNestedManyWithoutArtistsInputObjectSchema } from './TrackProduceByArtistUncheckedCreateNestedManyWithoutArtistsInput.schema';
import { AlbumProduceByArtistUncheckedCreateNestedManyWithoutArtistInputObjectSchema } from './AlbumProduceByArtistUncheckedCreateNestedManyWithoutArtistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistUncheckedCreateWithoutGenresInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    popularity: z.number().optional().nullable(),
    imageUrl: z.string().optional().nullable(),
    TrackProduceByArtist: z
      .lazy(
        () =>
          TrackProduceByArtistUncheckedCreateNestedManyWithoutArtistsInputObjectSchema,
      )
      .optional(),
    AlbumProduceByArtist: z
      .lazy(
        () =>
          AlbumProduceByArtistUncheckedCreateNestedManyWithoutArtistInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ArtistUncheckedCreateWithoutGenresInputObjectSchema = Schema;
