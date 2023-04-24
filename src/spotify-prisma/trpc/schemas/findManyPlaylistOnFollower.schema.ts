import { z } from 'zod';
import { PlaylistOnFollowerOrderByWithRelationInputObjectSchema } from './objects/PlaylistOnFollowerOrderByWithRelationInput.schema';
import { PlaylistOnFollowerWhereInputObjectSchema } from './objects/PlaylistOnFollowerWhereInput.schema';
import { PlaylistOnFollowerWhereUniqueInputObjectSchema } from './objects/PlaylistOnFollowerWhereUniqueInput.schema';
import { PlaylistOnFollowerScalarFieldEnumSchema } from './enums/PlaylistOnFollowerScalarFieldEnum.schema';

export const PlaylistOnFollowerFindManySchema = z.object({
  orderBy: z
    .union([
      PlaylistOnFollowerOrderByWithRelationInputObjectSchema,
      PlaylistOnFollowerOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PlaylistOnFollowerWhereInputObjectSchema.optional(),
  cursor: PlaylistOnFollowerWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(PlaylistOnFollowerScalarFieldEnumSchema).optional(),
});
