import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistInGenresCreateManyTagInput> = z
  .object({
    artistId: z.number(),
  })
  .strict();

export const ArtistInGenresCreateManyTagInputObjectSchema = Schema;
