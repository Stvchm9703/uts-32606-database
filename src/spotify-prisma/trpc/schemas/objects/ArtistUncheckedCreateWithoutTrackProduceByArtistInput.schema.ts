import { z } from 'zod';
import { ArtistInGenresUncheckedCreateNestedManyWithoutArtistInputObjectSchema } from './ArtistInGenresUncheckedCreateNestedManyWithoutArtistInput.schema';
import { AlbumProduceByArtistUncheckedCreateNestedManyWithoutArtistInputObjectSchema } from './AlbumProduceByArtistUncheckedCreateNestedManyWithoutArtistInput.schema';
import { ArtistOnFollowingUncheckedCreateNestedManyWithoutArtistInputObjectSchema } from './ArtistOnFollowingUncheckedCreateNestedManyWithoutArtistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistUncheckedCreateWithoutTrackProduceByArtistInput> =
  z
    .object({
      id: z.number().optional(),
      createdAt: z.date().optional(),
      updatedAt: z.date().optional(),
      uid: z.string(),
      name: z.string(),
      popularity: z.number().optional().nullable(),
      imageUrl: z.string().optional().nullable(),
      Genres: z
        .lazy(
          () =>
            ArtistInGenresUncheckedCreateNestedManyWithoutArtistInputObjectSchema,
        )
        .optional(),
      AlbumProduceByArtist: z
        .lazy(
          () =>
            AlbumProduceByArtistUncheckedCreateNestedManyWithoutArtistInputObjectSchema,
        )
        .optional(),
      Followers: z
        .lazy(
          () =>
            ArtistOnFollowingUncheckedCreateNestedManyWithoutArtistInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ArtistUncheckedCreateWithoutTrackProduceByArtistInputObjectSchema =
  Schema;
