import { z } from 'zod';
import { AlbumAvailableMarketCreateNestedManyWithoutTagInputObjectSchema } from './AlbumAvailableMarketCreateNestedManyWithoutTagInput.schema';
import { TracksAvailableMarketCreateNestedManyWithoutTagInputObjectSchema } from './TracksAvailableMarketCreateNestedManyWithoutTagInput.schema';
import { ArtistInGenresCreateNestedManyWithoutTagInputObjectSchema } from './ArtistInGenresCreateNestedManyWithoutTagInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TagCreateInput> = z
  .object({
    code: z.string(),
    type: z.string(),
    name: z.string(),
    AlbumAvailableMarket: z
      .lazy(
        () => AlbumAvailableMarketCreateNestedManyWithoutTagInputObjectSchema,
      )
      .optional(),
    TracksAvailableMarket: z
      .lazy(
        () => TracksAvailableMarketCreateNestedManyWithoutTagInputObjectSchema,
      )
      .optional(),
    ArtistInGenres: z
      .lazy(() => ArtistInGenresCreateNestedManyWithoutTagInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagCreateInputObjectSchema = Schema;
