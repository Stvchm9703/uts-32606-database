import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { AlbumAvailableMarketUncheckedUpdateManyWithoutAlbumNestedInputObjectSchema } from './AlbumAvailableMarketUncheckedUpdateManyWithoutAlbumNestedInput.schema';
import { TrackUncheckedUpdateManyWithoutAlbumNestedInputObjectSchema } from './TrackUncheckedUpdateManyWithoutAlbumNestedInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumUncheckedUpdateWithoutArtistsInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    albumType: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    totalTracks: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    imageUrl: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    availableMarkets: z
      .lazy(
        () =>
          AlbumAvailableMarketUncheckedUpdateManyWithoutAlbumNestedInputObjectSchema,
      )
      .optional(),
    Tracks: z
      .lazy(() => TrackUncheckedUpdateManyWithoutAlbumNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const AlbumUncheckedUpdateWithoutArtistsInputObjectSchema = Schema;
