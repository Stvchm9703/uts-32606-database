import { z } from 'zod';
import { AlbumAvailableMarketUncheckedCreateNestedManyWithoutTagInputObjectSchema } from './AlbumAvailableMarketUncheckedCreateNestedManyWithoutTagInput.schema';
import { TracksAvailableMarketUncheckedCreateNestedManyWithoutTagInputObjectSchema } from './TracksAvailableMarketUncheckedCreateNestedManyWithoutTagInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TagUncheckedCreateWithoutArtistInGenresInput> = z
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
  })
  .strict();

export const TagUncheckedCreateWithoutArtistInGenresInputObjectSchema = Schema;
