import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { ArtistInGenresUpdateManyWithoutArtistNestedInputObjectSchema } from './ArtistInGenresUpdateManyWithoutArtistNestedInput.schema';
import { TrackProduceByArtistUpdateManyWithoutArtistsNestedInputObjectSchema } from './TrackProduceByArtistUpdateManyWithoutArtistsNestedInput.schema';
import { AlbumProduceByArtistUpdateManyWithoutArtistNestedInputObjectSchema } from './AlbumProduceByArtistUpdateManyWithoutArtistNestedInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistUpdateWithoutFollowersInput> = z
  .object({
    createdAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    uid: z
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
    popularity: z
      .union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    imageUrl: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    Genres: z
      .lazy(() => ArtistInGenresUpdateManyWithoutArtistNestedInputObjectSchema)
      .optional(),
    TrackProduceByArtist: z
      .lazy(
        () =>
          TrackProduceByArtistUpdateManyWithoutArtistsNestedInputObjectSchema,
      )
      .optional(),
    AlbumProduceByArtist: z
      .lazy(
        () =>
          AlbumProduceByArtistUpdateManyWithoutArtistNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ArtistUpdateWithoutFollowersInputObjectSchema = Schema;
