import { z } from 'zod';
import { TracksOnPlaylistWhereInputObjectSchema } from './TracksOnPlaylistWhereInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksOnPlaylistListRelationFilter> = z
  .object({
    every: z.lazy(() => TracksOnPlaylistWhereInputObjectSchema).optional(),
    some: z.lazy(() => TracksOnPlaylistWhereInputObjectSchema).optional(),
    none: z.lazy(() => TracksOnPlaylistWhereInputObjectSchema).optional(),
  })
  .strict();

export const TracksOnPlaylistListRelationFilterObjectSchema = Schema;
