import { z } from 'zod';
import { TagUpdateOneRequiredWithoutArtistInGenresNestedInputObjectSchema } from './TagUpdateOneRequiredWithoutArtistInGenresNestedInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistInGenresUpdateWithoutArtistInput> = z
  .object({
    Tag: z
      .lazy(
        () => TagUpdateOneRequiredWithoutArtistInGenresNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ArtistInGenresUpdateWithoutArtistInputObjectSchema = Schema;
