import { z } from 'zod';
import { PlaylistOrderByWithRelationInputObjectSchema } from './objects/PlaylistOrderByWithRelationInput.schema';
import { PlaylistWhereInputObjectSchema } from './objects/PlaylistWhereInput.schema';
import { PlaylistWhereUniqueInputObjectSchema } from './objects/PlaylistWhereUniqueInput.schema';
import { PlaylistScalarFieldEnumSchema } from './enums/PlaylistScalarFieldEnum.schema';

export const PlaylistFindManySchema = z.object({
  orderBy: z
    .union([
      PlaylistOrderByWithRelationInputObjectSchema,
      PlaylistOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PlaylistWhereInputObjectSchema.optional(),
  cursor: PlaylistWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(PlaylistScalarFieldEnumSchema).optional(),
});
