import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PlaylistScalarWhereInputObjectSchema),
        z.lazy(() => PlaylistScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PlaylistScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PlaylistScalarWhereInputObjectSchema),
        z.lazy(() => PlaylistScalarWhereInputObjectSchema).array(),
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
    collaborative: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    public: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    snapshotId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    primaryColor: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    tracksIds: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    ownerId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    imagesId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict();

export const PlaylistScalarWhereInputObjectSchema = Schema;
