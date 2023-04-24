import { z } from 'zod';
import { PlaylistOnFollowerOrderByWithRelationInputObjectSchema } from './objects/PlaylistOnFollowerOrderByWithRelationInput.schema';
import { PlaylistOnFollowerWhereInputObjectSchema } from './objects/PlaylistOnFollowerWhereInput.schema';
import { PlaylistOnFollowerWhereUniqueInputObjectSchema } from './objects/PlaylistOnFollowerWhereUniqueInput.schema';
import { PlaylistOnFollowerCountAggregateInputObjectSchema } from './objects/PlaylistOnFollowerCountAggregateInput.schema';
import { PlaylistOnFollowerMinAggregateInputObjectSchema } from './objects/PlaylistOnFollowerMinAggregateInput.schema';
import { PlaylistOnFollowerMaxAggregateInputObjectSchema } from './objects/PlaylistOnFollowerMaxAggregateInput.schema';
import { PlaylistOnFollowerAvgAggregateInputObjectSchema } from './objects/PlaylistOnFollowerAvgAggregateInput.schema';
import { PlaylistOnFollowerSumAggregateInputObjectSchema } from './objects/PlaylistOnFollowerSumAggregateInput.schema';

export const PlaylistOnFollowerAggregateSchema = z.object({
  orderBy: z
    .union([
      PlaylistOnFollowerOrderByWithRelationInputObjectSchema,
      PlaylistOnFollowerOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PlaylistOnFollowerWhereInputObjectSchema.optional(),
  cursor: PlaylistOnFollowerWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), PlaylistOnFollowerCountAggregateInputObjectSchema])
    .optional(),
  _min: PlaylistOnFollowerMinAggregateInputObjectSchema.optional(),
  _max: PlaylistOnFollowerMaxAggregateInputObjectSchema.optional(),
  _avg: PlaylistOnFollowerAvgAggregateInputObjectSchema.optional(),
  _sum: PlaylistOnFollowerSumAggregateInputObjectSchema.optional(),
});
