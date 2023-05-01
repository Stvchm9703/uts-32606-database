import { z } from 'zod';
import { ArtistInGenresUncheckedCreateNestedManyWithoutArtistInputObjectSchema } from './ArtistInGenresUncheckedCreateNestedManyWithoutArtistInput.schema';
import { TrackProduceByArtistUncheckedCreateNestedManyWithoutArtistsInputObjectSchema } from './TrackProduceByArtistUncheckedCreateNestedManyWithoutArtistsInput.schema';
import { AlbumProduceByArtistUncheckedCreateNestedManyWithoutArtistInputObjectSchema } from './AlbumProduceByArtistUncheckedCreateNestedManyWithoutArtistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    popularity: z.number().optional().nullable(),
    imageUrl: z.string().optional().nullable(),
    Genres: z
      .lazy(
        () =>
          ArtistInGenresUncheckedCreateNestedManyWithoutArtistInputObjectSchema,
      )
      .optional(),
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

export const ArtistUncheckedCreateInputObjectSchema = Schema;
