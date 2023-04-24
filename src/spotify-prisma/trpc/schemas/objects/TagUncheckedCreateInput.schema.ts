import { z } from 'zod';
import { AlbumAvailableMarketUncheckedCreateNestedManyWithoutTagInputObjectSchema } from './AlbumAvailableMarketUncheckedCreateNestedManyWithoutTagInput.schema';
import { TracksAvailableMarketUncheckedCreateNestedManyWithoutTagInputObjectSchema } from './TracksAvailableMarketUncheckedCreateNestedManyWithoutTagInput.schema';
import { ArtistInGenresUncheckedCreateNestedManyWithoutTagInputObjectSchema } from './ArtistInGenresUncheckedCreateNestedManyWithoutTagInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TagUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    code: z.string(),
    type: z.string(),
    name: z.string(),
    AlbumAvailableMarket: z
      .lazy(
        () =>
          AlbumAvailableMarketUncheckedCreateNestedManyWithoutTagInputObjectSchema,
      )
      .optional(),
    TracksAvailableMarket: z
      .lazy(
        () =>
          TracksAvailableMarketUncheckedCreateNestedManyWithoutTagInputObjectSchema,
      )
      .optional(),
    ArtistInGenres: z
      .lazy(
        () =>
          ArtistInGenresUncheckedCreateNestedManyWithoutTagInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TagUncheckedCreateInputObjectSchema = Schema;
