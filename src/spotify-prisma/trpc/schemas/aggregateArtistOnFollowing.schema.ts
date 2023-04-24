import { z } from 'zod';
import { ArtistOnFollowingOrderByWithRelationInputObjectSchema } from './objects/ArtistOnFollowingOrderByWithRelationInput.schema';
import { ArtistOnFollowingWhereInputObjectSchema } from './objects/ArtistOnFollowingWhereInput.schema';
import { ArtistOnFollowingWhereUniqueInputObjectSchema } from './objects/ArtistOnFollowingWhereUniqueInput.schema';
import { ArtistOnFollowingCountAggregateInputObjectSchema } from './objects/ArtistOnFollowingCountAggregateInput.schema';
import { ArtistOnFollowingMinAggregateInputObjectSchema } from './objects/ArtistOnFollowingMinAggregateInput.schema';
import { ArtistOnFollowingMaxAggregateInputObjectSchema } from './objects/ArtistOnFollowingMaxAggregateInput.schema';
import { ArtistOnFollowingAvgAggregateInputObjectSchema } from './objects/ArtistOnFollowingAvgAggregateInput.schema';
import { ArtistOnFollowingSumAggregateInputObjectSchema } from './objects/ArtistOnFollowingSumAggregateInput.schema';

export const ArtistOnFollowingAggregateSchema = z.object({
  orderBy: z
    .union([
      ArtistOnFollowingOrderByWithRelationInputObjectSchema,
      ArtistOnFollowingOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ArtistOnFollowingWhereInputObjectSchema.optional(),
  cursor: ArtistOnFollowingWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ArtistOnFollowingCountAggregateInputObjectSchema])
    .optional(),
  _min: ArtistOnFollowingMinAggregateInputObjectSchema.optional(),
  _max: ArtistOnFollowingMaxAggregateInputObjectSchema.optional(),
  _avg: ArtistOnFollowingAvgAggregateInputObjectSchema.optional(),
  _sum: ArtistOnFollowingSumAggregateInputObjectSchema.optional(),
});
