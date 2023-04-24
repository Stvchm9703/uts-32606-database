import { z } from 'zod';
import { TracksOnPlaylistOrderByWithRelationInputObjectSchema } from './objects/TracksOnPlaylistOrderByWithRelationInput.schema';
import { TracksOnPlaylistWhereInputObjectSchema } from './objects/TracksOnPlaylistWhereInput.schema';
import { TracksOnPlaylistWhereUniqueInputObjectSchema } from './objects/TracksOnPlaylistWhereUniqueInput.schema';
import { TracksOnPlaylistScalarFieldEnumSchema } from './enums/TracksOnPlaylistScalarFieldEnum.schema';

export const TracksOnPlaylistFindManySchema = z.object({
  orderBy: z
    .union([
      TracksOnPlaylistOrderByWithRelationInputObjectSchema,
      TracksOnPlaylistOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TracksOnPlaylistWhereInputObjectSchema.optional(),
  cursor: TracksOnPlaylistWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(TracksOnPlaylistScalarFieldEnumSchema).optional(),
});
