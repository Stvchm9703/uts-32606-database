import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { TagRelationFilterObjectSchema } from './TagRelationFilter.schema';
import { TagWhereInputObjectSchema } from './TagWhereInput.schema';
import { TrackRelationFilterObjectSchema } from './TrackRelationFilter.schema';
import { TrackWhereInputObjectSchema } from './TrackWhereInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksAvailableMarketWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TracksAvailableMarketWhereInputObjectSchema),
        z.lazy(() => TracksAvailableMarketWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TracksAvailableMarketWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TracksAvailableMarketWhereInputObjectSchema),
        z.lazy(() => TracksAvailableMarketWhereInputObjectSchema).array(),
      ])
      .optional(),
    tagId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    trackId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    Tag: z
      .union([
        z.lazy(() => TagRelationFilterObjectSchema),
        z.lazy(() => TagWhereInputObjectSchema),
      ])
      .optional(),
    Track: z
      .union([
        z.lazy(() => TrackRelationFilterObjectSchema),
        z.lazy(() => TrackWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const TracksAvailableMarketWhereInputObjectSchema = Schema;
