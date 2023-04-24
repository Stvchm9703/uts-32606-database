import { z } from 'zod';
import { TracksAvailableMarketUpdateManyMutationInputObjectSchema } from './objects/TracksAvailableMarketUpdateManyMutationInput.schema';
import { TracksAvailableMarketWhereInputObjectSchema } from './objects/TracksAvailableMarketWhereInput.schema';

export const TracksAvailableMarketUpdateManySchema = z.object({
  data: TracksAvailableMarketUpdateManyMutationInputObjectSchema,
  where: TracksAvailableMarketWhereInputObjectSchema.optional(),
});
