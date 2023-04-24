import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistInGenresArtistIdTagIdCompoundUniqueInput> =
  z
    .object({
      artistId: z.number(),
      tagId: z.number(),
    })
    .strict();

export const ArtistInGenresArtistIdTagIdCompoundUniqueInputObjectSchema =
  Schema;
