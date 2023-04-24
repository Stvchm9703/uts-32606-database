import { z } from 'zod';
import { TracksAvailableMarketWhereUniqueInputObjectSchema } from './objects/TracksAvailableMarketWhereUniqueInput.schema';
import { TracksAvailableMarketCreateInputObjectSchema } from './objects/TracksAvailableMarketCreateInput.schema';
import { TracksAvailableMarketUncheckedCreateInputObjectSchema } from './objects/TracksAvailableMarketUncheckedCreateInput.schema';
import { TracksAvailableMarketUpdateInputObjectSchema } from './objects/TracksAvailableMarketUpdateInput.schema';
import { TracksAvailableMarketUncheckedUpdateInputObjectSchema } from './objects/TracksAvailableMarketUncheckedUpdateInput.schema';

export const TracksAvailableMarketUpsertSchema = z.object({
  where: TracksAvailableMarketWhereUniqueInputObjectSchema,
  create: z.union([
    TracksAvailableMarketCreateInputObjectSchema,
    TracksAvailableMarketUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    TracksAvailableMarketUpdateInputObjectSchema,
    TracksAvailableMarketUncheckedUpdateInputObjectSchema,
  ]),
});
