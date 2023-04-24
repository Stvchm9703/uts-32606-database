import { z } from 'zod';
import { AlbumAvailableMarketOrderByWithRelationInputObjectSchema } from './objects/AlbumAvailableMarketOrderByWithRelationInput.schema';
import { AlbumAvailableMarketWhereInputObjectSchema } from './objects/AlbumAvailableMarketWhereInput.schema';
import { AlbumAvailableMarketWhereUniqueInputObjectSchema } from './objects/AlbumAvailableMarketWhereUniqueInput.schema';
import { AlbumAvailableMarketCountAggregateInputObjectSchema } from './objects/AlbumAvailableMarketCountAggregateInput.schema';
import { AlbumAvailableMarketMinAggregateInputObjectSchema } from './objects/AlbumAvailableMarketMinAggregateInput.schema';
import { AlbumAvailableMarketMaxAggregateInputObjectSchema } from './objects/AlbumAvailableMarketMaxAggregateInput.schema';
import { AlbumAvailableMarketAvgAggregateInputObjectSchema } from './objects/AlbumAvailableMarketAvgAggregateInput.schema';
import { AlbumAvailableMarketSumAggregateInputObjectSchema } from './objects/AlbumAvailableMarketSumAggregateInput.schema';

export const AlbumAvailableMarketAggregateSchema = z.object({
  orderBy: z
    .union([
      AlbumAvailableMarketOrderByWithRelationInputObjectSchema,
      AlbumAvailableMarketOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: AlbumAvailableMarketWhereInputObjectSchema.optional(),
  cursor: AlbumAvailableMarketWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([
      z.literal(true),
      AlbumAvailableMarketCountAggregateInputObjectSchema,
    ])
    .optional(),
  _min: AlbumAvailableMarketMinAggregateInputObjectSchema.optional(),
  _max: AlbumAvailableMarketMaxAggregateInputObjectSchema.optional(),
  _avg: AlbumAvailableMarketAvgAggregateInputObjectSchema.optional(),
  _sum: AlbumAvailableMarketSumAggregateInputObjectSchema.optional(),
});
