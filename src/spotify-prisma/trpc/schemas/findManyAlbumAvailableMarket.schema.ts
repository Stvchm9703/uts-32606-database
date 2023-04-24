import { z } from 'zod';
import { AlbumAvailableMarketOrderByWithRelationInputObjectSchema } from './objects/AlbumAvailableMarketOrderByWithRelationInput.schema';
import { AlbumAvailableMarketWhereInputObjectSchema } from './objects/AlbumAvailableMarketWhereInput.schema';
import { AlbumAvailableMarketWhereUniqueInputObjectSchema } from './objects/AlbumAvailableMarketWhereUniqueInput.schema';
import { AlbumAvailableMarketScalarFieldEnumSchema } from './enums/AlbumAvailableMarketScalarFieldEnum.schema';

export const AlbumAvailableMarketFindManySchema = z.object({
  orderBy: z
    .union([
      AlbumAvailableMarketOrderByWithRelationInputObjectSchema,
      AlbumAvailableMarketOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: AlbumAvailableMarketWhereInputObjectSchema.optional(),
  cursor: AlbumAvailableMarketWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(AlbumAvailableMarketScalarFieldEnumSchema).optional(),
});
