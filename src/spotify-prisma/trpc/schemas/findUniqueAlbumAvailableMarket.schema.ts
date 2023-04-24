import { z } from 'zod';
import { AlbumAvailableMarketWhereUniqueInputObjectSchema } from './objects/AlbumAvailableMarketWhereUniqueInput.schema';

export const AlbumAvailableMarketFindUniqueSchema = z.object({
  where: AlbumAvailableMarketWhereUniqueInputObjectSchema,
});
