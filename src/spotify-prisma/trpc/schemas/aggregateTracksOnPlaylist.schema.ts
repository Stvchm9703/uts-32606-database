import { z } from 'zod';
import { TracksOnPlaylistOrderByWithRelationInputObjectSchema } from './objects/TracksOnPlaylistOrderByWithRelationInput.schema';
import { TracksOnPlaylistWhereInputObjectSchema } from './objects/TracksOnPlaylistWhereInput.schema';
import { TracksOnPlaylistWhereUniqueInputObjectSchema } from './objects/TracksOnPlaylistWhereUniqueInput.schema';
import { TracksOnPlaylistCountAggregateInputObjectSchema } from './objects/TracksOnPlaylistCountAggregateInput.schema';
import { TracksOnPlaylistMinAggregateInputObjectSchema } from './objects/TracksOnPlaylistMinAggregateInput.schema';
import { TracksOnPlaylistMaxAggregateInputObjectSchema } from './objects/TracksOnPlaylistMaxAggregateInput.schema';
import { TracksOnPlaylistAvgAggregateInputObjectSchema } from './objects/TracksOnPlaylistAvgAggregateInput.schema';
import { TracksOnPlaylistSumAggregateInputObjectSchema } from './objects/TracksOnPlaylistSumAggregateInput.schema';

export const TracksOnPlaylistAggregateSchema = z.object({
  orderBy: z
    .union([
      TracksOnPlaylistOrderByWithRelationInputObjectSchema,
      TracksOnPlaylistOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TracksOnPlaylistWhereInputObjectSchema.optional(),
  cursor: TracksOnPlaylistWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), TracksOnPlaylistCountAggregateInputObjectSchema])
    .optional(),
  _min: TracksOnPlaylistMinAggregateInputObjectSchema.optional(),
  _max: TracksOnPlaylistMaxAggregateInputObjectSchema.optional(),
  _avg: TracksOnPlaylistAvgAggregateInputObjectSchema.optional(),
  _sum: TracksOnPlaylistSumAggregateInputObjectSchema.optional(),
});
