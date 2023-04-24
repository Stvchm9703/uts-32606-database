import { z } from 'zod';
import { TracksAvailableMarketUpdateInputObjectSchema } from './objects/TracksAvailableMarketUpdateInput.schema';
import { TracksAvailableMarketUncheckedUpdateInputObjectSchema } from './objects/TracksAvailableMarketUncheckedUpdateInput.schema';
import { TracksAvailableMarketWhereUniqueInputObjectSchema } from './objects/TracksAvailableMarketWhereUniqueInput.schema';

export const TracksAvailableMarketUpdateOneSchema = z.object({
  data: z.union([
    TracksAvailableMarketUpdateInputObjectSchema,
    TracksAvailableMarketUncheckedUpdateInputObjectSchema,
  ]),
  where: TracksAvailableMarketWhereUniqueInputObjectSchema,
});
