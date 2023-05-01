import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { TracksAvailableMarketListRelationFilterObjectSchema } from './TracksAvailableMarketListRelationFilter.schema';
import { TrackProduceByArtistListRelationFilterObjectSchema } from './TrackProduceByArtistListRelationFilter.schema';
import { TracksOnPlaylistListRelationFilterObjectSchema } from './TracksOnPlaylistListRelationFilter.schema';
import { AlbumRelationFilterObjectSchema } from './AlbumRelationFilter.schema';
import { AlbumWhereInputObjectSchema } from './AlbumWhereInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TrackWhereInputObjectSchema),
        z.lazy(() => TrackWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TrackWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TrackWhereInputObjectSchema),
        z.lazy(() => TrackWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    discNumber: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    popularity: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    previewUrl: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    trackNumber: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    albumId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    availableMarkets: z
      .lazy(() => TracksAvailableMarketListRelationFilterObjectSchema)
      .optional(),
    Artists: z
      .lazy(() => TrackProduceByArtistListRelationFilterObjectSchema)
      .optional(),
    InPlaylist: z
      .lazy(() => TracksOnPlaylistListRelationFilterObjectSchema)
      .optional(),
    Album: z
      .union([
        z.lazy(() => AlbumRelationFilterObjectSchema),
        z.lazy(() => AlbumWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const TrackWhereInputObjectSchema = Schema;
