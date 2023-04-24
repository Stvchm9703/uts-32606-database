import { z } from 'zod';
import { AlbumUpdateOneRequiredWithoutAvailableMarketsNestedInputObjectSchema } from './AlbumUpdateOneRequiredWithoutAvailableMarketsNestedInput.schema';
import { TagUpdateOneRequiredWithoutAlbumAvailableMarketNestedInputObjectSchema } from './TagUpdateOneRequiredWithoutAlbumAvailableMarketNestedInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumAvailableMarketUpdateInput> = z
  .object({
    Album: z
      .lazy(
        () =>
          AlbumUpdateOneRequiredWithoutAvailableMarketsNestedInputObjectSchema,
      )
      .optional(),
    Tag: z
      .lazy(
        () =>
          TagUpdateOneRequiredWithoutAlbumAvailableMarketNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AlbumAvailableMarketUpdateInputObjectSchema = Schema;
