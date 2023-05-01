import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistDataMetaWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ArtistDataMetaWhereInputObjectSchema),
        z.lazy(() => ArtistDataMetaWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ArtistDataMetaWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ArtistDataMetaWhereInputObjectSchema),
        z.lazy(() => ArtistDataMetaWhereInputObjectSchema).array(),
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
  })
  .strict();

export const ArtistDataMetaWhereInputObjectSchema = Schema;
