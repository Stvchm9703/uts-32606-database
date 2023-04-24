import { z } from 'zod';
import { PlaylistOnFollowerUpdateManyMutationInputObjectSchema } from './objects/PlaylistOnFollowerUpdateManyMutationInput.schema';
import { PlaylistOnFollowerWhereInputObjectSchema } from './objects/PlaylistOnFollowerWhereInput.schema';

export const PlaylistOnFollowerUpdateManySchema = z.object({
  data: PlaylistOnFollowerUpdateManyMutationInputObjectSchema,
  where: PlaylistOnFollowerWhereInputObjectSchema.optional(),
});
