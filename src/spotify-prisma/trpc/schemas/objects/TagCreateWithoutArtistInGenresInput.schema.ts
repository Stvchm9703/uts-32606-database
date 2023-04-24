import { z } from 'zod';
import { AlbumAvailableMarketCreateNestedManyWithoutTagInputObjectSchema } from './AlbumAvailableMarketCreateNestedManyWithoutTagInput.schema';
import { TracksAvailableMarketCreateNestedManyWithoutTagInputObjectSchema } from './TracksAvailableMarketCreateNestedManyWithoutTagInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TagCreateWithoutArtistInGenresInput> = z
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
  })
  .strict();

export const TagCreateWithoutArtistInGenresInputObjectSchema = Schema;
