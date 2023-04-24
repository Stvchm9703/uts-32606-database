import { z } from 'zod';
import { TagUpdateOneRequiredWithoutAlbumAvailableMarketNestedInputObjectSchema } from './TagUpdateOneRequiredWithoutAlbumAvailableMarketNestedInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumAvailableMarketUpdateWithoutAlbumInput> = z
  .object({
    Tag: z
      .lazy(
        () =>
          TagUpdateOneRequiredWithoutAlbumAvailableMarketNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AlbumAvailableMarketUpdateWithoutAlbumInputObjectSchema = Schema;
