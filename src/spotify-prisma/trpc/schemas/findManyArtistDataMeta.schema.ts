import { z } from 'zod';
import { ArtistDataMetaOrderByWithRelationInputObjectSchema } from './objects/ArtistDataMetaOrderByWithRelationInput.schema';
import { ArtistDataMetaWhereInputObjectSchema } from './objects/ArtistDataMetaWhereInput.schema';
import { ArtistDataMetaWhereUniqueInputObjectSchema } from './objects/ArtistDataMetaWhereUniqueInput.schema';
import { ArtistDataMetaScalarFieldEnumSchema } from './enums/ArtistDataMetaScalarFieldEnum.schema';

export const ArtistDataMetaFindManySchema = z.object({
  orderBy: z
    .union([
      ArtistDataMetaOrderByWithRelationInputObjectSchema,
      ArtistDataMetaOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ArtistDataMetaWhereInputObjectSchema.optional(),
  cursor: ArtistDataMetaWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ArtistDataMetaScalarFieldEnumSchema).optional(),
});
