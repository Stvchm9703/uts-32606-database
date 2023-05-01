import { z } from 'zod';
import { TrackMetaOrderByWithRelationInputObjectSchema } from './objects/TrackMetaOrderByWithRelationInput.schema';
import { TrackMetaWhereInputObjectSchema } from './objects/TrackMetaWhereInput.schema';
import { TrackMetaWhereUniqueInputObjectSchema } from './objects/TrackMetaWhereUniqueInput.schema';
import { TrackMetaCountAggregateInputObjectSchema } from './objects/TrackMetaCountAggregateInput.schema';
import { TrackMetaMinAggregateInputObjectSchema } from './objects/TrackMetaMinAggregateInput.schema';
import { TrackMetaMaxAggregateInputObjectSchema } from './objects/TrackMetaMaxAggregateInput.schema';
import { TrackMetaAvgAggregateInputObjectSchema } from './objects/TrackMetaAvgAggregateInput.schema';
import { TrackMetaSumAggregateInputObjectSchema } from './objects/TrackMetaSumAggregateInput.schema';

export const TrackMetaAggregateSchema = z.object({
  orderBy: z
    .union([
      TrackMetaOrderByWithRelationInputObjectSchema,
      TrackMetaOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TrackMetaWhereInputObjectSchema.optional(),
  cursor: TrackMetaWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), TrackMetaCountAggregateInputObjectSchema])
    .optional(),
  _min: TrackMetaMinAggregateInputObjectSchema.optional(),
  _max: TrackMetaMaxAggregateInputObjectSchema.optional(),
  _avg: TrackMetaAvgAggregateInputObjectSchema.optional(),
  _sum: TrackMetaSumAggregateInputObjectSchema.optional(),
});
