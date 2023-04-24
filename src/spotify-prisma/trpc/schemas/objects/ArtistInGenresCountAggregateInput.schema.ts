import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistInGenresCountAggregateInputType> = z
  .object({
    artistId: z.literal(true).optional(),
    tagId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const ArtistInGenresCountAggregateInputObjectSchema = Schema;
