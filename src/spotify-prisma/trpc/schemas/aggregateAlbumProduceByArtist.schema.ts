import { z } from 'zod';
import { AlbumProduceByArtistOrderByWithRelationInputObjectSchema } from './objects/AlbumProduceByArtistOrderByWithRelationInput.schema';
import { AlbumProduceByArtistWhereInputObjectSchema } from './objects/AlbumProduceByArtistWhereInput.schema';
import { AlbumProduceByArtistWhereUniqueInputObjectSchema } from './objects/AlbumProduceByArtistWhereUniqueInput.schema';
import { AlbumProduceByArtistCountAggregateInputObjectSchema } from './objects/AlbumProduceByArtistCountAggregateInput.schema';
import { AlbumProduceByArtistMinAggregateInputObjectSchema } from './objects/AlbumProduceByArtistMinAggregateInput.schema';
import { AlbumProduceByArtistMaxAggregateInputObjectSchema } from './objects/AlbumProduceByArtistMaxAggregateInput.schema';
import { AlbumProduceByArtistAvgAggregateInputObjectSchema } from './objects/AlbumProduceByArtistAvgAggregateInput.schema';
import { AlbumProduceByArtistSumAggregateInputObjectSchema } from './objects/AlbumProduceByArtistSumAggregateInput.schema';

export const AlbumProduceByArtistAggregateSchema = z.object({
  orderBy: z
    .union([
      AlbumProduceByArtistOrderByWithRelationInputObjectSchema,
      AlbumProduceByArtistOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: AlbumProduceByArtistWhereInputObjectSchema.optional(),
  cursor: AlbumProduceByArtistWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([
      z.literal(true),
      AlbumProduceByArtistCountAggregateInputObjectSchema,
    ])
    .optional(),
  _min: AlbumProduceByArtistMinAggregateInputObjectSchema.optional(),
  _max: AlbumProduceByArtistMaxAggregateInputObjectSchema.optional(),
  _avg: AlbumProduceByArtistAvgAggregateInputObjectSchema.optional(),
  _sum: AlbumProduceByArtistSumAggregateInputObjectSchema.optional(),
});
