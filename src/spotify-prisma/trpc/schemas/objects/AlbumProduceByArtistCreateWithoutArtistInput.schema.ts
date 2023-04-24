import { z } from 'zod';
import { AlbumCreateNestedOneWithoutArtistsInputObjectSchema } from './AlbumCreateNestedOneWithoutArtistsInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumProduceByArtistCreateWithoutArtistInput> = z
  .object({
    Album: z.lazy(() => AlbumCreateNestedOneWithoutArtistsInputObjectSchema),
  })
  .strict();

export const AlbumProduceByArtistCreateWithoutArtistInputObjectSchema = Schema;
