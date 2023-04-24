import { z } from 'zod';
import { AlbumWhereInputObjectSchema } from './AlbumWhereInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumRelationFilter> = z
  .object({
    is: z.lazy(() => AlbumWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => AlbumWhereInputObjectSchema).optional(),
  })
  .strict();

export const AlbumRelationFilterObjectSchema = Schema;
