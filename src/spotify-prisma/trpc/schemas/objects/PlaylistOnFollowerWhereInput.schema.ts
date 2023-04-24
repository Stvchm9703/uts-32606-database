import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { PlaylistRelationFilterObjectSchema } from './PlaylistRelationFilter.schema';
import { PlaylistWhereInputObjectSchema } from './PlaylistWhereInput.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistOnFollowerWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PlaylistOnFollowerWhereInputObjectSchema),
        z.lazy(() => PlaylistOnFollowerWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PlaylistOnFollowerWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PlaylistOnFollowerWhereInputObjectSchema),
        z.lazy(() => PlaylistOnFollowerWhereInputObjectSchema).array(),
      ])
      .optional(),
    playlistId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    userId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    Playlist: z
      .union([
        z.lazy(() => PlaylistRelationFilterObjectSchema),
        z.lazy(() => PlaylistWhereInputObjectSchema),
      ])
      .optional(),
    User: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const PlaylistOnFollowerWhereInputObjectSchema = Schema;
