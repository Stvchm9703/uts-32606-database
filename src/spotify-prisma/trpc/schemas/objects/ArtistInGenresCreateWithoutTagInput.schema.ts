import { z } from 'zod';
import { ArtistCreateNestedOneWithoutGenresInputObjectSchema } from './ArtistCreateNestedOneWithoutGenresInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistInGenresCreateWithoutTagInput> = z
  .object({
    Artist: z.lazy(() => ArtistCreateNestedOneWithoutGenresInputObjectSchema),
  })
  .strict();

export const ArtistInGenresCreateWithoutTagInputObjectSchema = Schema;
