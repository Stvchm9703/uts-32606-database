import { z } from 'zod';
import { AlbumUpdateOneRequiredWithoutArtistsNestedInputObjectSchema } from './AlbumUpdateOneRequiredWithoutArtistsNestedInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumProduceByArtistUpdateWithoutArtistInput> = z
  .object({
    Album: z
      .lazy(() => AlbumUpdateOneRequiredWithoutArtistsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const AlbumProduceByArtistUpdateWithoutArtistInputObjectSchema = Schema;
