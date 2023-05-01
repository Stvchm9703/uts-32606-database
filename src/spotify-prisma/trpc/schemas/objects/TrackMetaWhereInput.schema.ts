import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackMetaWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TrackMetaWhereInputObjectSchema),
        z.lazy(() => TrackMetaWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TrackMetaWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TrackMetaWhereInputObjectSchema),
        z.lazy(() => TrackMetaWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    uid: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    durationMs: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const TrackMetaWhereInputObjectSchema = Schema;
