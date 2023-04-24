import { z } from 'zod';
import { TrackWhereInputObjectSchema } from './TrackWhereInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackRelationFilter> = z
  .object({
    is: z.lazy(() => TrackWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => TrackWhereInputObjectSchema).optional(),
  })
  .strict();

export const TrackRelationFilterObjectSchema = Schema;
