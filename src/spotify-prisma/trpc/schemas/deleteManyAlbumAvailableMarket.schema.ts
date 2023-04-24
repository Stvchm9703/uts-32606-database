import { z } from 'zod';
import { AlbumAvailableMarketWhereInputObjectSchema } from './objects/AlbumAvailableMarketWhereInput.schema';

export const AlbumAvailableMarketDeleteManySchema = z.object({
  where: AlbumAvailableMarketWhereInputObjectSchema.optional(),
});
