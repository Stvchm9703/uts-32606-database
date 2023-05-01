import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumMetaWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AlbumMetaWhereInputObjectSchema),
        z.lazy(() => AlbumMetaWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AlbumMetaWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AlbumMetaWhereInputObjectSchema),
        z.lazy(() => AlbumMetaWhereInputObjectSchema).array(),
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
    releaseDate: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    releaseDatePrecision: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    copyrights: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict();

export const AlbumMetaWhereInputObjectSchema = Schema;
