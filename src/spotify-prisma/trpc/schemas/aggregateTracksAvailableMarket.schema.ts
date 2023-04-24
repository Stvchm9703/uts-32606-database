import { z } from 'zod';
import { TracksAvailableMarketOrderByWithRelationInputObjectSchema } from './objects/TracksAvailableMarketOrderByWithRelationInput.schema';
import { TracksAvailableMarketWhereInputObjectSchema } from './objects/TracksAvailableMarketWhereInput.schema';
import { TracksAvailableMarketWhereUniqueInputObjectSchema } from './objects/TracksAvailableMarketWhereUniqueInput.schema';
import { TracksAvailableMarketCountAggregateInputObjectSchema } from './objects/TracksAvailableMarketCountAggregateInput.schema';
import { TracksAvailableMarketMinAggregateInputObjectSchema } from './objects/TracksAvailableMarketMinAggregateInput.schema';
import { TracksAvailableMarketMaxAggregateInputObjectSchema } from './objects/TracksAvailableMarketMaxAggregateInput.schema';
import { TracksAvailableMarketAvgAggregateInputObjectSchema } from './objects/TracksAvailableMarketAvgAggregateInput.schema';
import { TracksAvailableMarketSumAggregateInputObjectSchema } from './objects/TracksAvailableMarketSumAggregateInput.schema';

export const TracksAvailableMarketAggregateSchema = z.object({
  orderBy: z
    .union([
      TracksAvailableMarketOrderByWithRelationInputObjectSchema,
      TracksAvailableMarketOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TracksAvailableMarketWhereInputObjectSchema.optional(),
  cursor: TracksAvailableMarketWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([
      z.literal(true),
      TracksAvailableMarketCountAggregateInputObjectSchema,
    ])
    .optional(),
  _min: TracksAvailableMarketMinAggregateInputObjectSchema.optional(),
  _max: TracksAvailableMarketMaxAggregateInputObjectSchema.optional(),
  _avg: TracksAvailableMarketAvgAggregateInputObjectSchema.optional(),
  _sum: TracksAvailableMarketSumAggregateInputObjectSchema.optional(),
});
