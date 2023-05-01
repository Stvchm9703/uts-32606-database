import { z } from 'zod';
import { PlaylistMetaOrderByWithRelationInputObjectSchema } from './objects/PlaylistMetaOrderByWithRelationInput.schema';
import { PlaylistMetaWhereInputObjectSchema } from './objects/PlaylistMetaWhereInput.schema';
import { PlaylistMetaWhereUniqueInputObjectSchema } from './objects/PlaylistMetaWhereUniqueInput.schema';
import { PlaylistMetaCountAggregateInputObjectSchema } from './objects/PlaylistMetaCountAggregateInput.schema';
import { PlaylistMetaMinAggregateInputObjectSchema } from './objects/PlaylistMetaMinAggregateInput.schema';
import { PlaylistMetaMaxAggregateInputObjectSchema } from './objects/PlaylistMetaMaxAggregateInput.schema';
import { PlaylistMetaAvgAggregateInputObjectSchema } from './objects/PlaylistMetaAvgAggregateInput.schema';
import { PlaylistMetaSumAggregateInputObjectSchema } from './objects/PlaylistMetaSumAggregateInput.schema';

export const PlaylistMetaAggregateSchema = z.object({
  orderBy: z
    .union([
      PlaylistMetaOrderByWithRelationInputObjectSchema,
      PlaylistMetaOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PlaylistMetaWhereInputObjectSchema.optional(),
  cursor: PlaylistMetaWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), PlaylistMetaCountAggregateInputObjectSchema])
    .optional(),
  _min: PlaylistMetaMinAggregateInputObjectSchema.optional(),
  _max: PlaylistMetaMaxAggregateInputObjectSchema.optional(),
  _avg: PlaylistMetaAvgAggregateInputObjectSchema.optional(),
  _sum: PlaylistMetaSumAggregateInputObjectSchema.optional(),
});
