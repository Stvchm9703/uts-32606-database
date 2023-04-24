import { z } from 'zod';
import { ArtistInGenresWhereInputObjectSchema } from './ArtistInGenresWhereInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistInGenresListRelationFilter> = z
  .object({
    every: z.lazy(() => ArtistInGenresWhereInputObjectSchema).optional(),
    some: z.lazy(() => ArtistInGenresWhereInputObjectSchema).optional(),
    none: z.lazy(() => ArtistInGenresWhereInputObjectSchema).optional(),
  })
  .strict();

export const ArtistInGenresListRelationFilterObjectSchema = Schema;
