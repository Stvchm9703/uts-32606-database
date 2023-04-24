import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { TracksOnPlaylistListRelationFilterObjectSchema } from './TracksOnPlaylistListRelationFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { PlaylistOnFollowerListRelationFilterObjectSchema } from './PlaylistOnFollowerListRelationFilter.schema';

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
    tracks: z
      .lazy(() => TracksOnPlaylistListRelationFilterObjectSchema)
      .optional(),
    owner: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    followers: z
      .lazy(() => PlaylistOnFollowerListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const PlaylistWhereInputObjectSchema = Schema;
