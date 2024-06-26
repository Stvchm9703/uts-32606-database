import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { ArtistInGenresUncheckedUpdateManyWithoutArtistNestedInputObjectSchema } from './ArtistInGenresUncheckedUpdateManyWithoutArtistNestedInput.schema';
import { TrackProduceByArtistUncheckedUpdateManyWithoutArtistsNestedInputObjectSchema } from './TrackProduceByArtistUncheckedUpdateManyWithoutArtistsNestedInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistUncheckedUpdateWithoutAlbumProduceByArtistInput> =
  z
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
      TrackProduceByArtist: z
        .lazy(
          () =>
            TrackProduceByArtistUncheckedUpdateManyWithoutArtistsNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ArtistUncheckedUpdateWithoutAlbumProduceByArtistInputObjectSchema =
  Schema;
