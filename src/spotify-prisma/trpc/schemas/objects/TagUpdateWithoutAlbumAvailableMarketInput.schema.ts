import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TracksAvailableMarketUpdateManyWithoutTagNestedInputObjectSchema } from './TracksAvailableMarketUpdateManyWithoutTagNestedInput.schema';
import { ArtistInGenresUpdateManyWithoutTagNestedInputObjectSchema } from './ArtistInGenresUpdateManyWithoutTagNestedInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TagUpdateWithoutAlbumAvailableMarketInput> = z
  .object({
    code: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    type: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    TracksAvailableMarket: z
      .lazy(
        () => TracksAvailableMarketUpdateManyWithoutTagNestedInputObjectSchema,
      )
      .optional(),
    ArtistInGenres: z
      .lazy(() => ArtistInGenresUpdateManyWithoutTagNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagUpdateWithoutAlbumAvailableMarketInputObjectSchema = Schema;
