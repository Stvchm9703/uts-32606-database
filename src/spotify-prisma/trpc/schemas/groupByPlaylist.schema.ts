import { z } from 'zod';
import { PlaylistWhereInputObjectSchema } from './objects/PlaylistWhereInput.schema';
import { PlaylistOrderByWithAggregationInputObjectSchema } from './objects/PlaylistOrderByWithAggregationInput.schema';
import { PlaylistScalarWhereWithAggregatesInputObjectSchema } from './objects/PlaylistScalarWhereWithAggregatesInput.schema';
import { PlaylistScalarFieldEnumSchema } from './enums/PlaylistScalarFieldEnum.schema';

export const PlaylistGroupBySchema = z.object({
  where: PlaylistWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      PlaylistOrderByWithAggregationInputObjectSchema,
      PlaylistOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: PlaylistScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(PlaylistScalarFieldEnumSchema),
});
