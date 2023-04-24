import { z } from 'zod';
import { TrackOrderByWithRelationInputObjectSchema } from './objects/TrackOrderByWithRelationInput.schema';
import { TrackWhereInputObjectSchema } from './objects/TrackWhereInput.schema';
import { TrackWhereUniqueInputObjectSchema } from './objects/TrackWhereUniqueInput.schema';
import { TrackCountAggregateInputObjectSchema } from './objects/TrackCountAggregateInput.schema';
import { TrackMinAggregateInputObjectSchema } from './objects/TrackMinAggregateInput.schema';
import { TrackMaxAggregateInputObjectSchema } from './objects/TrackMaxAggregateInput.schema';
import { TrackAvgAggregateInputObjectSchema } from './objects/TrackAvgAggregateInput.schema';
import { TrackSumAggregateInputObjectSchema } from './objects/TrackSumAggregateInput.schema';

export const TrackAggregateSchema = z.object({
  orderBy: z
    .union([
      TrackOrderByWithRelationInputObjectSchema,
      TrackOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TrackWhereInputObjectSchema.optional(),
  cursor: TrackWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), TrackCountAggregateInputObjectSchema])
    .optional(),
  _min: TrackMinAggregateInputObjectSchema.optional(),
  _max: TrackMaxAggregateInputObjectSchema.optional(),
  _avg: TrackAvgAggregateInputObjectSchema.optional(),
  _sum: TrackSumAggregateInputObjectSchema.optional(),
});
