import { z } from 'zod';
import { ArtistInGenresArtistIdTagIdCompoundUniqueInputObjectSchema } from './ArtistInGenresArtistIdTagIdCompoundUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistInGenresWhereUniqueInput> = z
  .object({
    artistId_tagId: z
      .lazy(() => ArtistInGenresArtistIdTagIdCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const ArtistInGenresWhereUniqueInputObjectSchema = Schema;
