import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { TracksAvailableMarketUncheckedUpdateManyWithoutTrackNestedInputObjectSchema } from './TracksAvailableMarketUncheckedUpdateManyWithoutTrackNestedInput.schema';
import { TrackProduceByArtistUncheckedUpdateManyWithoutTrackNestedInputObjectSchema } from './TrackProduceByArtistUncheckedUpdateManyWithoutTrackNestedInput.schema';
import { TracksOnPlaylistUncheckedUpdateManyWithoutTrackNestedInputObjectSchema } from './TracksOnPlaylistUncheckedUpdateManyWithoutTrackNestedInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackUncheckedUpdateInput> = z
  .object({
    id: z
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
    discNumber: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    popularity: z
      .union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    previewUrl: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    trackNumber: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    albumId: z
      .union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    availableMarkets: z
      .lazy(
        () =>
          TracksAvailableMarketUncheckedUpdateManyWithoutTrackNestedInputObjectSchema,
      )
      .optional(),
    Artists: z
      .lazy(
        () =>
          TrackProduceByArtistUncheckedUpdateManyWithoutTrackNestedInputObjectSchema,
      )
      .optional(),
    InPlaylist: z
      .lazy(
        () =>
          TracksOnPlaylistUncheckedUpdateManyWithoutTrackNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TrackUncheckedUpdateInputObjectSchema = Schema;
