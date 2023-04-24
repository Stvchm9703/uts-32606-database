import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { AlbumAvailableMarketUpdateManyWithoutTagNestedInputObjectSchema } from './AlbumAvailableMarketUpdateManyWithoutTagNestedInput.schema';
import { ArtistInGenresUpdateManyWithoutTagNestedInputObjectSchema } from './ArtistInGenresUpdateManyWithoutTagNestedInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TagUpdateWithoutTracksAvailableMarketInput> = z
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
    AlbumAvailableMarket: z
      .lazy(
        () => AlbumAvailableMarketUpdateManyWithoutTagNestedInputObjectSchema,
      )
      .optional(),
    ArtistInGenres: z
      .lazy(() => ArtistInGenresUpdateManyWithoutTagNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagUpdateWithoutTracksAvailableMarketInputObjectSchema = Schema;
