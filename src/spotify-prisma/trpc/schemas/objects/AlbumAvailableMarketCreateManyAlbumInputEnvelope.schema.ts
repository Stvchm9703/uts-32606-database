import { z } from 'zod';
import { AlbumAvailableMarketCreateManyAlbumInputObjectSchema } from './AlbumAvailableMarketCreateManyAlbumInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumAvailableMarketCreateManyAlbumInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => AlbumAvailableMarketCreateManyAlbumInputObjectSchema),
        z
          .lazy(() => AlbumAvailableMarketCreateManyAlbumInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const AlbumAvailableMarketCreateManyAlbumInputEnvelopeObjectSchema =
  Schema;
