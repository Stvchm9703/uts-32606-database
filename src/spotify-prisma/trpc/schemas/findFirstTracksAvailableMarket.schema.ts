import { z } from 'zod';
import { TracksAvailableMarketOrderByWithRelationInputObjectSchema } from './objects/TracksAvailableMarketOrderByWithRelationInput.schema';
import { TracksAvailableMarketWhereInputObjectSchema } from './objects/TracksAvailableMarketWhereInput.schema';
import { TracksAvailableMarketWhereUniqueInputObjectSchema } from './objects/TracksAvailableMarketWhereUniqueInput.schema';
import { TracksAvailableMarketScalarFieldEnumSchema } from './enums/TracksAvailableMarketScalarFieldEnum.schema';

export const TracksAvailableMarketFindFirstSchema = z.object({
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
  distinct: z.array(TracksAvailableMarketScalarFieldEnumSchema).optional(),
});
