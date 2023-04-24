import { z } from 'zod';
import { AlbumAvailableMarketCreateManyInputObjectSchema } from './objects/AlbumAvailableMarketCreateManyInput.schema';

export const AlbumAvailableMarketCreateManySchema = z.object({
  data: z.union([
    AlbumAvailableMarketCreateManyInputObjectSchema,
    z.array(AlbumAvailableMarketCreateManyInputObjectSchema),
  ]),
});
