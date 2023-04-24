import { z } from 'zod';
import { ArtistInGenresCreateNestedManyWithoutArtistInputObjectSchema } from './ArtistInGenresCreateNestedManyWithoutArtistInput.schema';
import { AlbumProduceByArtistCreateNestedManyWithoutArtistInputObjectSchema } from './AlbumProduceByArtistCreateNestedManyWithoutArtistInput.schema';
import { ArtistOnFollowingCreateNestedManyWithoutArtistInputObjectSchema } from './ArtistOnFollowingCreateNestedManyWithoutArtistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistCreateWithoutTrackProduceByArtistInput> = z
  .object({
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    uid: z.string(),
    name: z.string(),
    popularity: z.number().optional().nullable(),
    imageUrl: z.string().optional().nullable(),
    Genres: z
      .lazy(() => ArtistInGenresCreateNestedManyWithoutArtistInputObjectSchema)
      .optional(),
    AlbumProduceByArtist: z
      .lazy(
        () =>
          AlbumProduceByArtistCreateNestedManyWithoutArtistInputObjectSchema,
      )
      .optional(),
    Followers: z
      .lazy(
        () => ArtistOnFollowingCreateNestedManyWithoutArtistInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ArtistCreateWithoutTrackProduceByArtistInputObjectSchema = Schema;
