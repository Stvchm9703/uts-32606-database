import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistInGenresUncheckedCreateWithoutTagInput> = z
  .object({
    artistId: z.number(),
  })
  .strict();

export const ArtistInGenresUncheckedCreateWithoutTagInputObjectSchema = Schema;
