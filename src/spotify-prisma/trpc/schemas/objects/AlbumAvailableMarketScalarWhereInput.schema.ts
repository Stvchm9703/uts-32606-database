import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumAvailableMarketScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AlbumAvailableMarketScalarWhereInputObjectSchema),
        z.lazy(() => AlbumAvailableMarketScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AlbumAvailableMarketScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AlbumAvailableMarketScalarWhereInputObjectSchema),
        z.lazy(() => AlbumAvailableMarketScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    albumId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    tagId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const AlbumAvailableMarketScalarWhereInputObjectSchema = Schema;
