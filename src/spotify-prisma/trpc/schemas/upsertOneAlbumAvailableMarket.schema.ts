import { z } from 'zod';
import { AlbumAvailableMarketWhereUniqueInputObjectSchema } from './objects/AlbumAvailableMarketWhereUniqueInput.schema';
import { AlbumAvailableMarketCreateInputObjectSchema } from './objects/AlbumAvailableMarketCreateInput.schema';
import { AlbumAvailableMarketUncheckedCreateInputObjectSchema } from './objects/AlbumAvailableMarketUncheckedCreateInput.schema';
import { AlbumAvailableMarketUpdateInputObjectSchema } from './objects/AlbumAvailableMarketUpdateInput.schema';
import { AlbumAvailableMarketUncheckedUpdateInputObjectSchema } from './objects/AlbumAvailableMarketUncheckedUpdateInput.schema';

export const AlbumAvailableMarketUpsertSchema = z.object({
  where: AlbumAvailableMarketWhereUniqueInputObjectSchema,
  create: z.union([
    AlbumAvailableMarketCreateInputObjectSchema,
    AlbumAvailableMarketUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    AlbumAvailableMarketUpdateInputObjectSchema,
    AlbumAvailableMarketUncheckedUpdateInputObjectSchema,
  ]),
});
