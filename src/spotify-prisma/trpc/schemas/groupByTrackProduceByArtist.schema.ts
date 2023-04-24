import { z } from 'zod';
import { TrackProduceByArtistWhereInputObjectSchema } from './objects/TrackProduceByArtistWhereInput.schema';
import { TrackProduceByArtistOrderByWithAggregationInputObjectSchema } from './objects/TrackProduceByArtistOrderByWithAggregationInput.schema';
import { TrackProduceByArtistScalarWhereWithAggregatesInputObjectSchema } from './objects/TrackProduceByArtistScalarWhereWithAggregatesInput.schema';
import { TrackProduceByArtistScalarFieldEnumSchema } from './enums/TrackProduceByArtistScalarFieldEnum.schema';

export const TrackProduceByArtistGroupBySchema = z.object({
  where: TrackProduceByArtistWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      TrackProduceByArtistOrderByWithAggregationInputObjectSchema,
      TrackProduceByArtistOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    TrackProduceByArtistScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(TrackProduceByArtistScalarFieldEnumSchema),
});
