import { z } from 'zod';
import { TracksAvailableMarketUncheckedCreateNestedManyWithoutTagInputObjectSchema } from './TracksAvailableMarketUncheckedCreateNestedManyWithoutTagInput.schema';
import { ArtistInGenresUncheckedCreateNestedManyWithoutTagInputObjectSchema } from './ArtistInGenresUncheckedCreateNestedManyWithoutTagInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TagUncheckedCreateWithoutAlbumAvailableMarketInput> =
  z
    .object({
      id: z.number().optional(),
      code: z.string(),
      type: z.string(),
      name: z.string(),
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

export const TagUncheckedCreateWithoutAlbumAvailableMarketInputObjectSchema =
  Schema;
