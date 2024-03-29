import { z } from 'zod';
import { ArtistInGenresCreateNestedManyWithoutArtistInputObjectSchema } from './ArtistInGenresCreateNestedManyWithoutArtistInput.schema';
import { TrackProduceByArtistCreateNestedManyWithoutArtistsInputObjectSchema } from './TrackProduceByArtistCreateNestedManyWithoutArtistsInput.schema';
import { AlbumProduceByArtistCreateNestedManyWithoutArtistInputObjectSchema } from './AlbumProduceByArtistCreateNestedManyWithoutArtistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistCreateInput> = z
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
    AlbumProduceByArtist: z
      .lazy(
        () =>
          AlbumProduceByArtistCreateNestedManyWithoutArtistInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ArtistCreateInputObjectSchema = Schema;
