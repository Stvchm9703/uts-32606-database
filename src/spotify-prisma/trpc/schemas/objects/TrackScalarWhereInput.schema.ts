import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TrackScalarWhereInputObjectSchema),
        z.lazy(() => TrackScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TrackScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TrackScalarWhereInputObjectSchema),
        z.lazy(() => TrackScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    discNumber: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    popularity: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    previewUrl: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    trackNumber: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    albumId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
  })
  .strict();

export const TrackScalarWhereInputObjectSchema = Schema;
