import { z } from 'zod';
import { AlbumAvailableMarketWhereUniqueInputObjectSchema } from './objects/AlbumAvailableMarketWhereUniqueInput.schema';

export const AlbumAvailableMarketDeleteOneSchema = z.object({
  where: AlbumAvailableMarketWhereUniqueInputObjectSchema,
});
