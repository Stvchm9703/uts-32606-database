import { z } from 'zod';
import { TagCreateNestedOneWithoutArtistInGenresInputObjectSchema } from './TagCreateNestedOneWithoutArtistInGenresInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistInGenresCreateWithoutArtistInput> = z
  .object({
    Tag: z.lazy(() => TagCreateNestedOneWithoutArtistInGenresInputObjectSchema),
  })
  .strict();

export const ArtistInGenresCreateWithoutArtistInputObjectSchema = Schema;
