import { z } from 'zod';
import { ArtistInGenresOrderByWithRelationInputObjectSchema } from './objects/ArtistInGenresOrderByWithRelationInput.schema';
import { ArtistInGenresWhereInputObjectSchema } from './objects/ArtistInGenresWhereInput.schema';
import { ArtistInGenresWhereUniqueInputObjectSchema } from './objects/ArtistInGenresWhereUniqueInput.schema';
import { ArtistInGenresScalarFieldEnumSchema } from './enums/ArtistInGenresScalarFieldEnum.schema';

export const ArtistInGenresFindManySchema = z.object({
  orderBy: z
    .union([
      ArtistInGenresOrderByWithRelationInputObjectSchema,
      ArtistInGenresOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ArtistInGenresWhereInputObjectSchema.optional(),
  cursor: ArtistInGenresWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ArtistInGenresScalarFieldEnumSchema).optional(),
});
