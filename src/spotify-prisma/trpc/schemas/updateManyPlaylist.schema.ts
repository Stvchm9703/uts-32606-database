import { z } from 'zod';
import { PlaylistUpdateManyMutationInputObjectSchema } from './objects/PlaylistUpdateManyMutationInput.schema';
import { PlaylistWhereInputObjectSchema } from './objects/PlaylistWhereInput.schema';

export const PlaylistUpdateManySchema = z.object({
  data: PlaylistUpdateManyMutationInputObjectSchema,
  where: PlaylistWhereInputObjectSchema.optional(),
});
