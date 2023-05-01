import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { TracksAvailableMarketUpdateManyWithoutTrackNestedInputObjectSchema } from './TracksAvailableMarketUpdateManyWithoutTrackNestedInput.schema';
import { TrackProduceByArtistUpdateManyWithoutTrackNestedInputObjectSchema } from './TrackProduceByArtistUpdateManyWithoutTrackNestedInput.schema';
import { TracksOnPlaylistUpdateManyWithoutTrackNestedInputObjectSchema } from './TracksOnPlaylistUpdateManyWithoutTrackNestedInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackUpdateWithoutAlbumInput> = z
  .object({
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
    availableMarkets: z
      .lazy(
        () =>
          TracksAvailableMarketUpdateManyWithoutTrackNestedInputObjectSchema,
      )
      .optional(),
    Artists: z
      .lazy(
        () => TrackProduceByArtistUpdateManyWithoutTrackNestedInputObjectSchema,
      )
      .optional(),
    InPlaylist: z
      .lazy(() => TracksOnPlaylistUpdateManyWithoutTrackNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const TrackUpdateWithoutAlbumInputObjectSchema = Schema;
