import { z } from 'zod';
import { AlbumAvailableMarketUpdateInputObjectSchema } from './objects/AlbumAvailableMarketUpdateInput.schema';
import { AlbumAvailableMarketUncheckedUpdateInputObjectSchema } from './objects/AlbumAvailableMarketUncheckedUpdateInput.schema';
import { AlbumAvailableMarketWhereUniqueInputObjectSchema } from './objects/AlbumAvailableMarketWhereUniqueInput.schema';

export const AlbumAvailableMarketUpdateOneSchema = z.object({
  data: z.union([
    AlbumAvailableMarketUpdateInputObjectSchema,
    AlbumAvailableMarketUncheckedUpdateInputObjectSchema,
  ]),
  where: AlbumAvailableMarketWhereUniqueInputObjectSchema,
});
