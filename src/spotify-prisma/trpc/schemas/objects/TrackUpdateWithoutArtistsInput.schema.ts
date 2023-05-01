import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { TracksAvailableMarketUpdateManyWithoutTrackNestedInputObjectSchema } from './TracksAvailableMarketUpdateManyWithoutTrackNestedInput.schema';
import { TracksOnPlaylistUpdateManyWithoutTrackNestedInputObjectSchema } from './TracksOnPlaylistUpdateManyWithoutTrackNestedInput.schema';
import { AlbumUpdateOneWithoutTracksNestedInputObjectSchema } from './AlbumUpdateOneWithoutTracksNestedInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackUpdateWithoutArtistsInput> = z
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
    InPlaylist: z
      .lazy(() => TracksOnPlaylistUpdateManyWithoutTrackNestedInputObjectSchema)
      .optional(),
    Album: z
      .lazy(() => AlbumUpdateOneWithoutTracksNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const TrackUpdateWithoutArtistsInputObjectSchema = Schema;
