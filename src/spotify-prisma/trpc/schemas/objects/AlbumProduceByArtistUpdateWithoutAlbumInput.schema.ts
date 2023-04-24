import { z } from 'zod';
import { ArtistUpdateOneRequiredWithoutAlbumProduceByArtistNestedInputObjectSchema } from './ArtistUpdateOneRequiredWithoutAlbumProduceByArtistNestedInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumProduceByArtistUpdateWithoutAlbumInput> = z
  .object({
    Artist: z
      .lazy(
        () =>
          ArtistUpdateOneRequiredWithoutAlbumProduceByArtistNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AlbumProduceByArtistUpdateWithoutAlbumInputObjectSchema = Schema;
