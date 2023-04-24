import { z } from 'zod';
import { PlaylistOnFollowerWhereInputObjectSchema } from './PlaylistOnFollowerWhereInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistOnFollowerListRelationFilter> = z
  .object({
    every: z.lazy(() => PlaylistOnFollowerWhereInputObjectSchema).optional(),
    some: z.lazy(() => PlaylistOnFollowerWhereInputObjectSchema).optional(),
    none: z.lazy(() => PlaylistOnFollowerWhereInputObjectSchema).optional(),
  })
  .strict();

export const PlaylistOnFollowerListRelationFilterObjectSchema = Schema;
