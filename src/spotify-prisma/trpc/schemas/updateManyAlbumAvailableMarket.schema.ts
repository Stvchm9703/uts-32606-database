import { z } from 'zod';
import { AlbumAvailableMarketUpdateManyMutationInputObjectSchema } from './objects/AlbumAvailableMarketUpdateManyMutationInput.schema';
import { AlbumAvailableMarketWhereInputObjectSchema } from './objects/AlbumAvailableMarketWhereInput.schema';

export const AlbumAvailableMarketUpdateManySchema = z.object({
  data: AlbumAvailableMarketUpdateManyMutationInputObjectSchema,
  where: AlbumAvailableMarketWhereInputObjectSchema.optional(),
});
