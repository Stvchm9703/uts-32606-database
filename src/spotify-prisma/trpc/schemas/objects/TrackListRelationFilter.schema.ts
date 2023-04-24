import { z } from 'zod';
import { TrackWhereInputObjectSchema } from './TrackWhereInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackListRelationFilter> = z
  .object({
    every: z.lazy(() => TrackWhereInputObjectSchema).optional(),
    some: z.lazy(() => TrackWhereInputObjectSchema).optional(),
    none: z.lazy(() => TrackWhereInputObjectSchema).optional(),
  })
  .strict();

export const TrackListRelationFilterObjectSchema = Schema;
