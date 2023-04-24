import { z } from 'zod';
import { AlbumUpdateOneRequiredWithoutAvailableMarketsNestedInputObjectSchema } from './AlbumUpdateOneRequiredWithoutAvailableMarketsNestedInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumAvailableMarketUpdateWithoutTagInput> = z
  .object({
    Album: z
      .lazy(
        () =>
          AlbumUpdateOneRequiredWithoutAvailableMarketsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AlbumAvailableMarketUpdateWithoutTagInputObjectSchema = Schema;
