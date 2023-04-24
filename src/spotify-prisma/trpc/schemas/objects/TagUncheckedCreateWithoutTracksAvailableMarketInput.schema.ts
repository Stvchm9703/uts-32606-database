import { z } from 'zod';
import { AlbumAvailableMarketUncheckedCreateNestedManyWithoutTagInputObjectSchema } from './AlbumAvailableMarketUncheckedCreateNestedManyWithoutTagInput.schema';
import { ArtistInGenresUncheckedCreateNestedManyWithoutTagInputObjectSchema } from './ArtistInGenresUncheckedCreateNestedManyWithoutTagInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TagUncheckedCreateWithoutTracksAvailableMarketInput> =
  z
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
      ArtistInGenres: z
        .lazy(
          () =>
            ArtistInGenresUncheckedCreateNestedManyWithoutTagInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const TagUncheckedCreateWithoutTracksAvailableMarketInputObjectSchema =
  Schema;
