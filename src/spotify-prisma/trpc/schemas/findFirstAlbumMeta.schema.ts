import { z } from 'zod';
import { AlbumMetaOrderByWithRelationInputObjectSchema } from './objects/AlbumMetaOrderByWithRelationInput.schema';
import { AlbumMetaWhereInputObjectSchema } from './objects/AlbumMetaWhereInput.schema';
import { AlbumMetaWhereUniqueInputObjectSchema } from './objects/AlbumMetaWhereUniqueInput.schema';
import { AlbumMetaScalarFieldEnumSchema } from './enums/AlbumMetaScalarFieldEnum.schema';

export const AlbumMetaFindFirstSchema = z.object({
  orderBy: z
    .union([
      AlbumMetaOrderByWithRelationInputObjectSchema,
      AlbumMetaOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: AlbumMetaWhereInputObjectSchema.optional(),
  cursor: AlbumMetaWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(AlbumMetaScalarFieldEnumSchema).optional(),
});
