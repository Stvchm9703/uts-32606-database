import { z } from 'zod';
import { PlaylistOnFollowerWhereInputObjectSchema } from './objects/PlaylistOnFollowerWhereInput.schema';
import { PlaylistOnFollowerOrderByWithAggregationInputObjectSchema } from './objects/PlaylistOnFollowerOrderByWithAggregationInput.schema';
import { PlaylistOnFollowerScalarWhereWithAggregatesInputObjectSchema } from './objects/PlaylistOnFollowerScalarWhereWithAggregatesInput.schema';
import { PlaylistOnFollowerScalarFieldEnumSchema } from './enums/PlaylistOnFollowerScalarFieldEnum.schema';

export const PlaylistOnFollowerGroupBySchema = z.object({
  where: PlaylistOnFollowerWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      PlaylistOnFollowerOrderByWithAggregationInputObjectSchema,
      PlaylistOnFollowerOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    PlaylistOnFollowerScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(PlaylistOnFollowerScalarFieldEnumSchema),
});
