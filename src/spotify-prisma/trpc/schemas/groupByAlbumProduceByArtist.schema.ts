import { z } from 'zod';
import { AlbumProduceByArtistWhereInputObjectSchema } from './objects/AlbumProduceByArtistWhereInput.schema';
import { AlbumProduceByArtistOrderByWithAggregationInputObjectSchema } from './objects/AlbumProduceByArtistOrderByWithAggregationInput.schema';
import { AlbumProduceByArtistScalarWhereWithAggregatesInputObjectSchema } from './objects/AlbumProduceByArtistScalarWhereWithAggregatesInput.schema';
import { AlbumProduceByArtistScalarFieldEnumSchema } from './enums/AlbumProduceByArtistScalarFieldEnum.schema';

export const AlbumProduceByArtistGroupBySchema = z.object({
  where: AlbumProduceByArtistWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      AlbumProduceByArtistOrderByWithAggregationInputObjectSchema,
      AlbumProduceByArtistOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    AlbumProduceByArtistScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(AlbumProduceByArtistScalarFieldEnumSchema),
});
