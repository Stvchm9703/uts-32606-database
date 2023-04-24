import { z } from 'zod';
import { ArtistOnFollowingWhereInputObjectSchema } from './objects/ArtistOnFollowingWhereInput.schema';
import { ArtistOnFollowingOrderByWithAggregationInputObjectSchema } from './objects/ArtistOnFollowingOrderByWithAggregationInput.schema';
import { ArtistOnFollowingScalarWhereWithAggregatesInputObjectSchema } from './objects/ArtistOnFollowingScalarWhereWithAggregatesInput.schema';
import { ArtistOnFollowingScalarFieldEnumSchema } from './enums/ArtistOnFollowingScalarFieldEnum.schema';

export const ArtistOnFollowingGroupBySchema = z.object({
  where: ArtistOnFollowingWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ArtistOnFollowingOrderByWithAggregationInputObjectSchema,
      ArtistOnFollowingOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    ArtistOnFollowingScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ArtistOnFollowingScalarFieldEnumSchema),
});
