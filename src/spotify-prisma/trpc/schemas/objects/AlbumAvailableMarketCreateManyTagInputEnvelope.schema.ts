import { z } from 'zod';
import { AlbumAvailableMarketCreateManyTagInputObjectSchema } from './AlbumAvailableMarketCreateManyTagInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumAvailableMarketCreateManyTagInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => AlbumAvailableMarketCreateManyTagInputObjectSchema),
        z
          .lazy(() => AlbumAvailableMarketCreateManyTagInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const AlbumAvailableMarketCreateManyTagInputEnvelopeObjectSchema =
  Schema;
