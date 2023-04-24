import { z } from 'zod';
import { TagCreateNestedOneWithoutAlbumAvailableMarketInputObjectSchema } from './TagCreateNestedOneWithoutAlbumAvailableMarketInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumAvailableMarketCreateWithoutAlbumInput> = z
  .object({
    Tag: z.lazy(
      () => TagCreateNestedOneWithoutAlbumAvailableMarketInputObjectSchema,
    ),
  })
  .strict();

export const AlbumAvailableMarketCreateWithoutAlbumInputObjectSchema = Schema;
