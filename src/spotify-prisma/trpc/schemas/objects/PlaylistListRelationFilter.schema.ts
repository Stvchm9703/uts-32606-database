import { z } from 'zod';
import { PlaylistWhereInputObjectSchema } from './PlaylistWhereInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistListRelationFilter> = z
  .object({
    every: z.lazy(() => PlaylistWhereInputObjectSchema).optional(),
    some: z.lazy(() => PlaylistWhereInputObjectSchema).optional(),
    none: z.lazy(() => PlaylistWhereInputObjectSchema).optional(),
  })
  .strict();

export const PlaylistListRelationFilterObjectSchema = Schema;
