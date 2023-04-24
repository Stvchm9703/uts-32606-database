import { z } from 'zod';
import { AlbumProduceByArtistCreateManyAlbumInputObjectSchema } from './AlbumProduceByArtistCreateManyAlbumInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumProduceByArtistCreateManyAlbumInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => AlbumProduceByArtistCreateManyAlbumInputObjectSchema),
        z
          .lazy(() => AlbumProduceByArtistCreateManyAlbumInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const AlbumProduceByArtistCreateManyAlbumInputEnvelopeObjectSchema =
  Schema;
