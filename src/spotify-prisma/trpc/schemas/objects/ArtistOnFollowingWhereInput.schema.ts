import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { ArtistRelationFilterObjectSchema } from './ArtistRelationFilter.schema';
import { ArtistWhereInputObjectSchema } from './ArtistWhereInput.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistOnFollowingWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ArtistOnFollowingWhereInputObjectSchema),
        z.lazy(() => ArtistOnFollowingWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ArtistOnFollowingWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ArtistOnFollowingWhereInputObjectSchema),
        z.lazy(() => ArtistOnFollowingWhereInputObjectSchema).array(),
      ])
      .optional(),
    artistId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    userId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    Artist: z
      .union([
        z.lazy(() => ArtistRelationFilterObjectSchema),
        z.lazy(() => ArtistWhereInputObjectSchema),
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

export const ArtistOnFollowingWhereInputObjectSchema = Schema;
