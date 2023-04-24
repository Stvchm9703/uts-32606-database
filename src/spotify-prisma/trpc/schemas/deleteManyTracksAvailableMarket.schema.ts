import { z } from 'zod';
import { TracksAvailableMarketWhereInputObjectSchema } from './objects/TracksAvailableMarketWhereInput.schema';

export const TracksAvailableMarketDeleteManySchema = z.object({
  where: TracksAvailableMarketWhereInputObjectSchema.optional(),
});
