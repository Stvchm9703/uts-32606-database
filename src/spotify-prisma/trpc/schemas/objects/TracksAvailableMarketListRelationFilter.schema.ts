import { z } from 'zod';
import { TracksAvailableMarketWhereInputObjectSchema } from './TracksAvailableMarketWhereInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksAvailableMarketListRelationFilter> = z
  .object({
    every: z.lazy(() => TracksAvailableMarketWhereInputObjectSchema).optional(),
    some: z.lazy(() => TracksAvailableMarketWhereInputObjectSchema).optional(),
    none: z.lazy(() => TracksAvailableMarketWhereInputObjectSchema).optional(),
  })
  .strict();

export const TracksAvailableMarketListRelationFilterObjectSchema = Schema;
