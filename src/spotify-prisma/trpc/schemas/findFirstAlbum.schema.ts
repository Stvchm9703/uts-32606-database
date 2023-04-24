import { z } from 'zod';
import { AlbumOrderByWithRelationInputObjectSchema } from './objects/AlbumOrderByWithRelationInput.schema';
import { AlbumWhereInputObjectSchema } from './objects/AlbumWhereInput.schema';
import { AlbumWhereUniqueInputObjectSchema } from './objects/AlbumWhereUniqueInput.schema';
import { AlbumScalarFieldEnumSchema } from './enums/AlbumScalarFieldEnum.schema';

export const AlbumFindFirstSchema = z.object({
  orderBy: z
    .union([
      AlbumOrderByWithRelationInputObjectSchema,
      AlbumOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: AlbumWhereInputObjectSchema.optional(),
  cursor: AlbumWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(AlbumScalarFieldEnumSchema).optional(),
});
