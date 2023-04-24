import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { PlaylistListRelationFilterObjectSchema } from './PlaylistListRelationFilter.schema';
import { PlaylistOnFollowerListRelationFilterObjectSchema } from './PlaylistOnFollowerListRelationFilter.schema';
import { ArtistOnFollowingListRelationFilterObjectSchema } from './ArtistOnFollowingListRelationFilter.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.UserWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
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
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    email: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    authType: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    type: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    country: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    explicitContentFilterEnabled: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    explicitContentFilterLocked: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    imagesId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    product: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    Playlist: z.lazy(() => PlaylistListRelationFilterObjectSchema).optional(),
    FollowPlaylists: z
      .lazy(() => PlaylistOnFollowerListRelationFilterObjectSchema)
      .optional(),
    FollowingArtists: z
      .lazy(() => ArtistOnFollowingListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const UserWhereInputObjectSchema = Schema;
