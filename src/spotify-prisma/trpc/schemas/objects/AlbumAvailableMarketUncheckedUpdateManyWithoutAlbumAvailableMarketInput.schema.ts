import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumAvailableMarketUncheckedUpdateManyWithoutAlbumAvailableMarketInput> =
  z
    .object({
      albumId: z
        .union([
          z.number(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const AlbumAvailableMarketUncheckedUpdateManyWithoutAlbumAvailableMarketInputObjectSchema =
  Schema;
