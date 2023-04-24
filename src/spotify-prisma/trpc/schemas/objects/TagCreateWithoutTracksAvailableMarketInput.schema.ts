import { z } from 'zod';
import { AlbumAvailableMarketCreateNestedManyWithoutTagInputObjectSchema } from './AlbumAvailableMarketCreateNestedManyWithoutTagInput.schema';
import { ArtistInGenresCreateNestedManyWithoutTagInputObjectSchema } from './ArtistInGenresCreateNestedManyWithoutTagInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TagCreateWithoutTracksAvailableMarketInput> = z
  .object({
    code: z.string(),
    type: z.string(),
    name: z.string(),
    AlbumAvailableMarket: z
      .lazy(
        () => AlbumAvailableMarketCreateNestedManyWithoutTagInputObjectSchema,
      )
      .optional(),
    ArtistInGenres: z
      .lazy(() => ArtistInGenresCreateNestedManyWithoutTagInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagCreateWithoutTracksAvailableMarketInputObjectSchema = Schema;
