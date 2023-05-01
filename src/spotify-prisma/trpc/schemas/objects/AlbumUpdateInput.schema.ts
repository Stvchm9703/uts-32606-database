import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { AlbumAvailableMarketUpdateManyWithoutAlbumNestedInputObjectSchema } from './AlbumAvailableMarketUpdateManyWithoutAlbumNestedInput.schema';
import { AlbumProduceByArtistUpdateManyWithoutAlbumNestedInputObjectSchema } from './AlbumProduceByArtistUpdateManyWithoutAlbumNestedInput.schema';
import { TrackUpdateManyWithoutAlbumNestedInputObjectSchema } from './TrackUpdateManyWithoutAlbumNestedInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumUpdateInput> = z
  .object({
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
        () => AlbumAvailableMarketUpdateManyWithoutAlbumNestedInputObjectSchema,
      )
      .optional(),
    Artists: z
      .lazy(
        () => AlbumProduceByArtistUpdateManyWithoutAlbumNestedInputObjectSchema,
      )
      .optional(),
    Tracks: z
      .lazy(() => TrackUpdateManyWithoutAlbumNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const AlbumUpdateInputObjectSchema = Schema;
