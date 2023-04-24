import { z } from 'zod';
import { TracksAvailableMarketCreateManyTagInputObjectSchema } from './TracksAvailableMarketCreateManyTagInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksAvailableMarketCreateManyTagInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => TracksAvailableMarketCreateManyTagInputObjectSchema),
        z
          .lazy(() => TracksAvailableMarketCreateManyTagInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const TracksAvailableMarketCreateManyTagInputEnvelopeObjectSchema =
  Schema;
