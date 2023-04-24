import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { ArtistInGenresUncheckedUpdateManyWithoutArtistNestedInputObjectSchema } from './ArtistInGenresUncheckedUpdateManyWithoutArtistNestedInput.schema';
import { AlbumProduceByArtistUncheckedUpdateManyWithoutArtistNestedInputObjectSchema } from './AlbumProduceByArtistUncheckedUpdateManyWithoutArtistNestedInput.schema';
import { ArtistOnFollowingUncheckedUpdateManyWithoutArtistNestedInputObjectSchema } from './ArtistOnFollowingUncheckedUpdateManyWithoutArtistNestedInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistUncheckedUpdateWithoutTrackProduceByArtistInput> =
  z
    .object({
      id: z
        .union([
          z.number(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
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
        .lazy(
          () =>
            ArtistInGenresUncheckedUpdateManyWithoutArtistNestedInputObjectSchema,
        )
        .optional(),
      AlbumProduceByArtist: z
        .lazy(
          () =>
            AlbumProduceByArtistUncheckedUpdateManyWithoutArtistNestedInputObjectSchema,
        )
        .optional(),
      Followers: z
        .lazy(
          () =>
            ArtistOnFollowingUncheckedUpdateManyWithoutArtistNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ArtistUncheckedUpdateWithoutTrackProduceByArtistInputObjectSchema =
  Schema;
