import { z } from 'zod';
import { TracksAvailableMarketCreateInputObjectSchema } from './objects/TracksAvailableMarketCreateInput.schema';
import { TracksAvailableMarketUncheckedCreateInputObjectSchema } from './objects/TracksAvailableMarketUncheckedCreateInput.schema';

export const TracksAvailableMarketCreateOneSchema = z.object({
  data: z.union([
    TracksAvailableMarketCreateInputObjectSchema,
    TracksAvailableMarketUncheckedCreateInputObjectSchema,
  ]),
});
