import { z } from 'zod';
import { ArtistInGenresUncheckedCreateNestedManyWithoutArtistInputObjectSchema } from './ArtistInGenresUncheckedCreateNestedManyWithoutArtistInput.schema';
import { TrackProduceByArtistUncheckedCreateNestedManyWithoutArtistsInputObjectSchema } from './TrackProduceByArtistUncheckedCreateNestedManyWithoutArtistsInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistUncheckedCreateWithoutAlbumProduceByArtistInput> =
  z
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
    })
    .strict();

export const ArtistUncheckedCreateWithoutAlbumProduceByArtistInputObjectSchema =
  Schema;
