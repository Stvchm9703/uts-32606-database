import { z } from 'zod';
import { AlbumCreateNestedOneWithoutArtistsInputObjectSchema } from './AlbumCreateNestedOneWithoutArtistsInput.schema';
import { ArtistCreateNestedOneWithoutAlbumProduceByArtistInputObjectSchema } from './ArtistCreateNestedOneWithoutAlbumProduceByArtistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumProduceByArtistCreateInput> = z
  .object({
    Album: z.lazy(() => AlbumCreateNestedOneWithoutArtistsInputObjectSchema),
    Artist: z.lazy(
      () => ArtistCreateNestedOneWithoutAlbumProduceByArtistInputObjectSchema,
    ),
  })
  .strict();

export const AlbumProduceByArtistCreateInputObjectSchema = Schema;
