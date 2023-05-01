import { z } from 'zod';
import { PlaylistMetaWhereInputObjectSchema } from './objects/PlaylistMetaWhereInput.schema';
import { PlaylistMetaOrderByWithAggregationInputObjectSchema } from './objects/PlaylistMetaOrderByWithAggregationInput.schema';
import { PlaylistMetaScalarWhereWithAggregatesInputObjectSchema } from './objects/PlaylistMetaScalarWhereWithAggregatesInput.schema';
import { PlaylistMetaScalarFieldEnumSchema } from './enums/PlaylistMetaScalarFieldEnum.schema';

export const PlaylistMetaGroupBySchema = z.object({
  where: PlaylistMetaWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      PlaylistMetaOrderByWithAggregationInputObjectSchema,
      PlaylistMetaOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: PlaylistMetaScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(PlaylistMetaScalarFieldEnumSchema),
});
