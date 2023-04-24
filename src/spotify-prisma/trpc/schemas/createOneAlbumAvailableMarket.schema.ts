import { z } from 'zod';
import { AlbumAvailableMarketCreateInputObjectSchema } from './objects/AlbumAvailableMarketCreateInput.schema';
import { AlbumAvailableMarketUncheckedCreateInputObjectSchema } from './objects/AlbumAvailableMarketUncheckedCreateInput.schema';

export const AlbumAvailableMarketCreateOneSchema = z.object({
  data: z.union([
    AlbumAvailableMarketCreateInputObjectSchema,
    AlbumAvailableMarketUncheckedCreateInputObjectSchema,
  ]),
});
