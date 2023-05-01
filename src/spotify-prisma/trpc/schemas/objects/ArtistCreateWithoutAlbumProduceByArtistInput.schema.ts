import { z } from 'zod';
import { ArtistInGenresCreateNestedManyWithoutArtistInputObjectSchema } from './ArtistInGenresCreateNestedManyWithoutArtistInput.schema';
import { TrackProduceByArtistCreateNestedManyWithoutArtistsInputObjectSchema } from './TrackProduceByArtistCreateNestedManyWithoutArtistsInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistCreateWithoutAlbumProduceByArtistInput> = z
  .object({
    name: z.string(),
    popularity: z.number().optional().nullable(),
    imageUrl: z.string().optional().nullable(),
    Genres: z
      .lazy(() => ArtistInGenresCreateNestedManyWithoutArtistInputObjectSchema)
      .optional(),
    TrackProduceByArtist: z
      .lazy(
        () =>
          TrackProduceByArtistCreateNestedManyWithoutArtistsInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ArtistCreateWithoutAlbumProduceByArtistInputObjectSchema = Schema;
