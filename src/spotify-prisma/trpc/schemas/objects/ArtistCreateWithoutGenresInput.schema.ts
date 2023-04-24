import { z } from 'zod';
import { TrackProduceByArtistCreateNestedManyWithoutArtistsInputObjectSchema } from './TrackProduceByArtistCreateNestedManyWithoutArtistsInput.schema';
import { AlbumProduceByArtistCreateNestedManyWithoutArtistInputObjectSchema } from './AlbumProduceByArtistCreateNestedManyWithoutArtistInput.schema';
import { ArtistOnFollowingCreateNestedManyWithoutArtistInputObjectSchema } from './ArtistOnFollowingCreateNestedManyWithoutArtistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistCreateWithoutGenresInput> = z
  .object({
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    uid: z.string(),
    name: z.string(),
    popularity: z.number().optional().nullable(),
    imageUrl: z.string().optional().nullable(),
    TrackProduceByArtist: z
      .lazy(
        () =>
          TrackProduceByArtistCreateNestedManyWithoutArtistsInputObjectSchema,
      )
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

export const ArtistCreateWithoutGenresInputObjectSchema = Schema;
