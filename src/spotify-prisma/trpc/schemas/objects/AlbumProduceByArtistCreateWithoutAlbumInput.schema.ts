import { z } from 'zod';
import { ArtistCreateNestedOneWithoutAlbumProduceByArtistInputObjectSchema } from './ArtistCreateNestedOneWithoutAlbumProduceByArtistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumProduceByArtistCreateWithoutAlbumInput> = z
  .object({
    Artist: z.lazy(
      () => ArtistCreateNestedOneWithoutAlbumProduceByArtistInputObjectSchema,
    ),
  })
  .strict();

export const AlbumProduceByArtistCreateWithoutAlbumInputObjectSchema = Schema;
