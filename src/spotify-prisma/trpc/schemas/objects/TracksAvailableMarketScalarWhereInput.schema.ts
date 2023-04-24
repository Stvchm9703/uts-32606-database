import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksAvailableMarketScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TracksAvailableMarketScalarWhereInputObjectSchema),
        z.lazy(() => TracksAvailableMarketScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TracksAvailableMarketScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TracksAvailableMarketScalarWhereInputObjectSchema),
        z.lazy(() => TracksAvailableMarketScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    tagId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    trackId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const TracksAvailableMarketScalarWhereInputObjectSchema = Schema;
