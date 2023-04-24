import { z } from 'zod';
import { TrackProduceByArtistOrderByWithRelationInputObjectSchema } from './objects/TrackProduceByArtistOrderByWithRelationInput.schema';
import { TrackProduceByArtistWhereInputObjectSchema } from './objects/TrackProduceByArtistWhereInput.schema';
import { TrackProduceByArtistWhereUniqueInputObjectSchema } from './objects/TrackProduceByArtistWhereUniqueInput.schema';
import { TrackProduceByArtistCountAggregateInputObjectSchema } from './objects/TrackProduceByArtistCountAggregateInput.schema';
import { TrackProduceByArtistMinAggregateInputObjectSchema } from './objects/TrackProduceByArtistMinAggregateInput.schema';
import { TrackProduceByArtistMaxAggregateInputObjectSchema } from './objects/TrackProduceByArtistMaxAggregateInput.schema';
import { TrackProduceByArtistAvgAggregateInputObjectSchema } from './objects/TrackProduceByArtistAvgAggregateInput.schema';
import { TrackProduceByArtistSumAggregateInputObjectSchema } from './objects/TrackProduceByArtistSumAggregateInput.schema';

export const TrackProduceByArtistAggregateSchema = z.object({
  orderBy: z
    .union([
      TrackProduceByArtistOrderByWithRelationInputObjectSchema,
      TrackProduceByArtistOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TrackProduceByArtistWhereInputObjectSchema.optional(),
  cursor: TrackProduceByArtistWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([
      z.literal(true),
      TrackProduceByArtistCountAggregateInputObjectSchema,
    ])
    .optional(),
  _min: TrackProduceByArtistMinAggregateInputObjectSchema.optional(),
  _max: TrackProduceByArtistMaxAggregateInputObjectSchema.optional(),
  _avg: TrackProduceByArtistAvgAggregateInputObjectSchema.optional(),
  _sum: TrackProduceByArtistSumAggregateInputObjectSchema.optional(),
});
