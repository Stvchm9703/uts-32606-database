import { z } from 'zod';
import { ArtistCreateNestedOneWithoutGenresInputObjectSchema } from './ArtistCreateNestedOneWithoutGenresInput.schema';
import { TagCreateNestedOneWithoutArtistInGenresInputObjectSchema } from './TagCreateNestedOneWithoutArtistInGenresInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistInGenresCreateInput> = z
  .object({
    Artist: z.lazy(() => ArtistCreateNestedOneWithoutGenresInputObjectSchema),
    Tag: z.lazy(() => TagCreateNestedOneWithoutArtistInGenresInputObjectSchema),
  })
  .strict();

export const ArtistInGenresCreateInputObjectSchema = Schema;
