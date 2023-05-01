import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { TracksOnPlaylistListRelationFilterObjectSchema } from './TracksOnPlaylistListRelationFilter.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PlaylistWhereInputObjectSchema),
        z.lazy(() => PlaylistWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PlaylistWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PlaylistWhereInputObjectSchema),
        z.lazy(() => PlaylistWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    public: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    primaryColor: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    imagesId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    tracks: z
      .lazy(() => TracksOnPlaylistListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const PlaylistWhereInputObjectSchema = Schema;
