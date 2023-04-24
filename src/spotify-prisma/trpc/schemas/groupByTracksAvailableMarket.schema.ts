import { z } from 'zod';
import { TracksAvailableMarketWhereInputObjectSchema } from './objects/TracksAvailableMarketWhereInput.schema';
import { TracksAvailableMarketOrderByWithAggregationInputObjectSchema } from './objects/TracksAvailableMarketOrderByWithAggregationInput.schema';
import { TracksAvailableMarketScalarWhereWithAggregatesInputObjectSchema } from './objects/TracksAvailableMarketScalarWhereWithAggregatesInput.schema';
import { TracksAvailableMarketScalarFieldEnumSchema } from './enums/TracksAvailableMarketScalarFieldEnum.schema';

export const TracksAvailableMarketGroupBySchema = z.object({
  where: TracksAvailableMarketWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      TracksAvailableMarketOrderByWithAggregationInputObjectSchema,
      TracksAvailableMarketOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    TracksAvailableMarketScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(TracksAvailableMarketScalarFieldEnumSchema),
});
