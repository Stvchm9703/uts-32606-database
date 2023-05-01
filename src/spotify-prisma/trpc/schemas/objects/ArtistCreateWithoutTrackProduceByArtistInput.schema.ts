import { z } from 'zod';
import { ArtistInGenresCreateNestedManyWithoutArtistInputObjectSchema } from './ArtistInGenresCreateNestedManyWithoutArtistInput.schema';
import { AlbumProduceByArtistCreateNestedManyWithoutArtistInputObjectSchema } from './AlbumProduceByArtistCreateNestedManyWithoutArtistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistCreateWithoutTrackProduceByArtistInput> = z
  .object({
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
  })
  .strict();

export const ArtistCreateWithoutTrackProduceByArtistInputObjectSchema = Schema;
