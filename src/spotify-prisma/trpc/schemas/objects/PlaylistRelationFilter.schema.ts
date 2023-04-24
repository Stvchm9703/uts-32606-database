import { z } from 'zod';
import { PlaylistWhereInputObjectSchema } from './PlaylistWhereInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistRelationFilter> = z
  .object({
    is: z.lazy(() => PlaylistWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => PlaylistWhereInputObjectSchema).optional(),
  })
  .strict();

export const PlaylistRelationFilterObjectSchema = Schema;
