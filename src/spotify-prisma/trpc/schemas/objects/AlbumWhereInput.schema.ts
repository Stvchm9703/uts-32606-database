import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { AlbumAvailableMarketListRelationFilterObjectSchema } from './AlbumAvailableMarketListRelationFilter.schema';
import { AlbumProduceByArtistListRelationFilterObjectSchema } from './AlbumProduceByArtistListRelationFilter.schema';
import { TrackListRelationFilterObjectSchema } from './TrackListRelationFilter.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AlbumWhereInputObjectSchema),
        z.lazy(() => AlbumWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AlbumWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AlbumWhereInputObjectSchema),
        z.lazy(() => AlbumWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    albumType: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    totalTracks: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    imageUrl: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    availableMarkets: z
      .lazy(() => AlbumAvailableMarketListRelationFilterObjectSchema)
      .optional(),
    Artists: z
      .lazy(() => AlbumProduceByArtistListRelationFilterObjectSchema)
      .optional(),
    Tracks: z.lazy(() => TrackListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const AlbumWhereInputObjectSchema = Schema;
