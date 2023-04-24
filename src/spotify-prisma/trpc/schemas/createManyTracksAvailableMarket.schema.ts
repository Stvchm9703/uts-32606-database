import { z } from 'zod';
import { TracksAvailableMarketCreateManyInputObjectSchema } from './objects/TracksAvailableMarketCreateManyInput.schema';

export const TracksAvailableMarketCreateManySchema = z.object({
  data: z.union([
    TracksAvailableMarketCreateManyInputObjectSchema,
    z.array(TracksAvailableMarketCreateManyInputObjectSchema),
  ]),
});
