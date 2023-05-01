import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { ArtistInGenresUpdateManyWithoutArtistNestedInputObjectSchema } from './ArtistInGenresUpdateManyWithoutArtistNestedInput.schema';
import { AlbumProduceByArtistUpdateManyWithoutArtistNestedInputObjectSchema } from './AlbumProduceByArtistUpdateManyWithoutArtistNestedInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistUpdateWithoutTrackProduceByArtistInput> = z
  .object({
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
    AlbumProduceByArtist: z
      .lazy(
        () =>
          AlbumProduceByArtistUpdateManyWithoutArtistNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ArtistUpdateWithoutTrackProduceByArtistInputObjectSchema = Schema;
