import { z } from 'zod';
import { ArtistUpdateOneRequiredWithoutGenresNestedInputObjectSchema } from './ArtistUpdateOneRequiredWithoutGenresNestedInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistInGenresUpdateWithoutTagInput> = z
  .object({
    Artist: z
      .lazy(() => ArtistUpdateOneRequiredWithoutGenresNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ArtistInGenresUpdateWithoutTagInputObjectSchema = Schema;
