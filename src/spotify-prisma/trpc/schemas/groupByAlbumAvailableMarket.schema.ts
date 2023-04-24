import { z } from 'zod';
import { AlbumAvailableMarketWhereInputObjectSchema } from './objects/AlbumAvailableMarketWhereInput.schema';
import { AlbumAvailableMarketOrderByWithAggregationInputObjectSchema } from './objects/AlbumAvailableMarketOrderByWithAggregationInput.schema';
import { AlbumAvailableMarketScalarWhereWithAggregatesInputObjectSchema } from './objects/AlbumAvailableMarketScalarWhereWithAggregatesInput.schema';
import { AlbumAvailableMarketScalarFieldEnumSchema } from './enums/AlbumAvailableMarketScalarFieldEnum.schema';

export const AlbumAvailableMarketGroupBySchema = z.object({
  where: AlbumAvailableMarketWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      AlbumAvailableMarketOrderByWithAggregationInputObjectSchema,
      AlbumAvailableMarketOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    AlbumAvailableMarketScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(AlbumAvailableMarketScalarFieldEnumSchema),
});
