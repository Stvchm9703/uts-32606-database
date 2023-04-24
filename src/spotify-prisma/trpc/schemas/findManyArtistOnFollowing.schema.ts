import { z } from 'zod';
import { ArtistOnFollowingOrderByWithRelationInputObjectSchema } from './objects/ArtistOnFollowingOrderByWithRelationInput.schema';
import { ArtistOnFollowingWhereInputObjectSchema } from './objects/ArtistOnFollowingWhereInput.schema';
import { ArtistOnFollowingWhereUniqueInputObjectSchema } from './objects/ArtistOnFollowingWhereUniqueInput.schema';
import { ArtistOnFollowingScalarFieldEnumSchema } from './enums/ArtistOnFollowingScalarFieldEnum.schema';

export const ArtistOnFollowingFindManySchema = z.object({
  orderBy: z
    .union([
      ArtistOnFollowingOrderByWithRelationInputObjectSchema,
      ArtistOnFollowingOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ArtistOnFollowingWhereInputObjectSchema.optional(),
  cursor: ArtistOnFollowingWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ArtistOnFollowingScalarFieldEnumSchema).optional(),
});
