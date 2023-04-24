import { z } from 'zod';
import { TracksAvailableMarketCreateManyTrackInputObjectSchema } from './TracksAvailableMarketCreateManyTrackInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksAvailableMarketCreateManyTrackInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => TracksAvailableMarketCreateManyTrackInputObjectSchema),
        z
          .lazy(() => TracksAvailableMarketCreateManyTrackInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const TracksAvailableMarketCreateManyTrackInputEnvelopeObjectSchema =
  Schema;
