import { z } from 'zod';
import { TracksAvailableMarketCreateNestedManyWithoutTagInputObjectSchema } from './TracksAvailableMarketCreateNestedManyWithoutTagInput.schema';
import { ArtistInGenresCreateNestedManyWithoutTagInputObjectSchema } from './ArtistInGenresCreateNestedManyWithoutTagInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TagCreateWithoutAlbumAvailableMarketInput> = z
  .object({
    code: z.string(),
    type: z.string(),
    name: z.string(),
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

export const TagCreateWithoutAlbumAvailableMarketInputObjectSchema = Schema;
