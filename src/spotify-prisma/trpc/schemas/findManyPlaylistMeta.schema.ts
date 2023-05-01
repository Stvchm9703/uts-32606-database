import { z } from 'zod';
import { PlaylistMetaOrderByWithRelationInputObjectSchema } from './objects/PlaylistMetaOrderByWithRelationInput.schema';
import { PlaylistMetaWhereInputObjectSchema } from './objects/PlaylistMetaWhereInput.schema';
import { PlaylistMetaWhereUniqueInputObjectSchema } from './objects/PlaylistMetaWhereUniqueInput.schema';
import { PlaylistMetaScalarFieldEnumSchema } from './enums/PlaylistMetaScalarFieldEnum.schema';

export const PlaylistMetaFindManySchema = z.object({
  orderBy: z
    .union([
      PlaylistMetaOrderByWithRelationInputObjectSchema,
      PlaylistMetaOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PlaylistMetaWhereInputObjectSchema.optional(),
  cursor: PlaylistMetaWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(PlaylistMetaScalarFieldEnumSchema).optional(),
});
