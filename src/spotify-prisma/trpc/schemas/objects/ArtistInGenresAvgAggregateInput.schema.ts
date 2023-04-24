import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistInGenresAvgAggregateInputType> = z
  .object({
    artistId: z.literal(true).optional(),
    tagId: z.literal(true).optional(),
  })
  .strict();

export const ArtistInGenresAvgAggregateInputObjectSchema = Schema;
