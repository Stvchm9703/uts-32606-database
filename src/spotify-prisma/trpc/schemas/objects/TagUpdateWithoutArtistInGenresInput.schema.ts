import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { AlbumAvailableMarketUpdateManyWithoutTagNestedInputObjectSchema } from './AlbumAvailableMarketUpdateManyWithoutTagNestedInput.schema';
import { TracksAvailableMarketUpdateManyWithoutTagNestedInputObjectSchema } from './TracksAvailableMarketUpdateManyWithoutTagNestedInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TagUpdateWithoutArtistInGenresInput> = z
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
    TracksAvailableMarket: z
      .lazy(
        () => TracksAvailableMarketUpdateManyWithoutTagNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TagUpdateWithoutArtistInGenresInputObjectSchema = Schema;
