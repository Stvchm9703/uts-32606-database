import { z } from 'zod';
import { ArtistUpdateOneRequiredWithoutGenresNestedInputObjectSchema } from './ArtistUpdateOneRequiredWithoutGenresNestedInput.schema';
import { TagUpdateOneRequiredWithoutArtistInGenresNestedInputObjectSchema } from './TagUpdateOneRequiredWithoutArtistInGenresNestedInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistInGenresUpdateInput> = z
  .object({
    Artist: z
      .lazy(() => ArtistUpdateOneRequiredWithoutGenresNestedInputObjectSchema)
      .optional(),
    Tag: z
      .lazy(
        () => TagUpdateOneRequiredWithoutArtistInGenresNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ArtistInGenresUpdateInputObjectSchema = Schema;
