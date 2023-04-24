import { z } from 'zod';
import { AlbumProduceByArtistCreateManyArtistInputObjectSchema } from './AlbumProduceByArtistCreateManyArtistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumProduceByArtistCreateManyArtistInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => AlbumProduceByArtistCreateManyArtistInputObjectSchema),
        z
          .lazy(() => AlbumProduceByArtistCreateManyArtistInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const AlbumProduceByArtistCreateManyArtistInputEnvelopeObjectSchema =
  Schema;
