import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { AlbumAvailableMarketUncheckedUpdateManyWithoutTagNestedInputObjectSchema } from './AlbumAvailableMarketUncheckedUpdateManyWithoutTagNestedInput.schema';
import { TracksAvailableMarketUncheckedUpdateManyWithoutTagNestedInputObjectSchema } from './TracksAvailableMarketUncheckedUpdateManyWithoutTagNestedInput.schema';
import { ArtistInGenresUncheckedUpdateManyWithoutTagNestedInputObjectSchema } from './ArtistInGenresUncheckedUpdateManyWithoutTagNestedInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TagUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
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
        () =>
          AlbumAvailableMarketUncheckedUpdateManyWithoutTagNestedInputObjectSchema,
      )
      .optional(),
    TracksAvailableMarket: z
      .lazy(
        () =>
          TracksAvailableMarketUncheckedUpdateManyWithoutTagNestedInputObjectSchema,
      )
      .optional(),
    ArtistInGenres: z
      .lazy(
        () =>
          ArtistInGenresUncheckedUpdateManyWithoutTagNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TagUncheckedUpdateInputObjectSchema = Schema;
