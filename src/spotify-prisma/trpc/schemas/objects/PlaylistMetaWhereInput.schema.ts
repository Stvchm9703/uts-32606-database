import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistMetaWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PlaylistMetaWhereInputObjectSchema),
        z.lazy(() => PlaylistMetaWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PlaylistMetaWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PlaylistMetaWhereInputObjectSchema),
        z.lazy(() => PlaylistMetaWhereInputObjectSchema).array(),
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
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict();

export const PlaylistMetaWhereInputObjectSchema = Schema;
