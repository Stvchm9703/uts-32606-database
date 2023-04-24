import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksAvailableMarketUncheckedUpdateManyWithoutTracksAvailableMarketInput> =
  z
    .object({
      trackId: z
        .union([
          z.number(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const TracksAvailableMarketUncheckedUpdateManyWithoutTracksAvailableMarketInputObjectSchema =
  Schema;
