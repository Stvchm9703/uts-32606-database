import { z } from 'zod';
import { PlaylistOrderByWithRelationInputObjectSchema } from './objects/PlaylistOrderByWithRelationInput.schema';
import { PlaylistWhereInputObjectSchema } from './objects/PlaylistWhereInput.schema';
import { PlaylistWhereUniqueInputObjectSchema } from './objects/PlaylistWhereUniqueInput.schema';
import { PlaylistCountAggregateInputObjectSchema } from './objects/PlaylistCountAggregateInput.schema';
import { PlaylistMinAggregateInputObjectSchema } from './objects/PlaylistMinAggregateInput.schema';
import { PlaylistMaxAggregateInputObjectSchema } from './objects/PlaylistMaxAggregateInput.schema';
import { PlaylistAvgAggregateInputObjectSchema } from './objects/PlaylistAvgAggregateInput.schema';
import { PlaylistSumAggregateInputObjectSchema } from './objects/PlaylistSumAggregateInput.schema';

export const PlaylistAggregateSchema = z.object({
  orderBy: z
    .union([
      PlaylistOrderByWithRelationInputObjectSchema,
      PlaylistOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PlaylistWhereInputObjectSchema.optional(),
  cursor: PlaylistWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), PlaylistCountAggregateInputObjectSchema])
    .optional(),
  _min: PlaylistMinAggregateInputObjectSchema.optional(),
  _max: PlaylistMaxAggregateInputObjectSchema.optional(),
  _avg: PlaylistAvgAggregateInputObjectSchema.optional(),
  _sum: PlaylistSumAggregateInputObjectSchema.optional(),
});
