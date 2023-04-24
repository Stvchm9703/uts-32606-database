import { z } from 'zod';
import { AlbumUpdateOneRequiredWithoutArtistsNestedInputObjectSchema } from './AlbumUpdateOneRequiredWithoutArtistsNestedInput.schema';
import { ArtistUpdateOneRequiredWithoutAlbumProduceByArtistNestedInputObjectSchema } from './ArtistUpdateOneRequiredWithoutAlbumProduceByArtistNestedInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumProduceByArtistUpdateInput> = z
  .object({
    Album: z
      .lazy(() => AlbumUpdateOneRequiredWithoutArtistsNestedInputObjectSchema)
      .optional(),
    Artist: z
      .lazy(
        () =>
          ArtistUpdateOneRequiredWithoutAlbumProduceByArtistNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AlbumProduceByArtistUpdateInputObjectSchema = Schema;
