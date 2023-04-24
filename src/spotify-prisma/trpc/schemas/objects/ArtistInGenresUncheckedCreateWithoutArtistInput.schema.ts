import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistInGenresUncheckedCreateWithoutArtistInput> =
  z
    .object({
      tagId: z.number(),
    })
    .strict();

export const ArtistInGenresUncheckedCreateWithoutArtistInputObjectSchema =
  Schema;
