import { z } from 'zod';
import { TracksAvailableMarketWhereUniqueInputObjectSchema } from './objects/TracksAvailableMarketWhereUniqueInput.schema';

export const TracksAvailableMarketDeleteOneSchema = z.object({
  where: TracksAvailableMarketWhereUniqueInputObjectSchema,
});
