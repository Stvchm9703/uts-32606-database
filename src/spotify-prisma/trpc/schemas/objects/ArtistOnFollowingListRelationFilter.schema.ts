import { z } from 'zod';
import { ArtistOnFollowingWhereInputObjectSchema } from './ArtistOnFollowingWhereInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistOnFollowingListRelationFilter> = z
  .object({
    every: z.lazy(() => ArtistOnFollowingWhereInputObjectSchema).optional(),
    some: z.lazy(() => ArtistOnFollowingWhereInputObjectSchema).optional(),
    none: z.lazy(() => ArtistOnFollowingWhereInputObjectSchema).optional(),
  })
  .strict();

export const ArtistOnFollowingListRelationFilterObjectSchema = Schema;
