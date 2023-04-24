import { z } from 'zod';
import { TracksAvailableMarketWhereUniqueInputObjectSchema } from './objects/TracksAvailableMarketWhereUniqueInput.schema';

export const TracksAvailableMarketFindUniqueSchema = z.object({
  where: TracksAvailableMarketWhereUniqueInputObjectSchema,
});
