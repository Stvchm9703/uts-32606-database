import { z } from 'zod';
import { PlaylistMetaUpdateManyMutationInputObjectSchema } from './objects/PlaylistMetaUpdateManyMutationInput.schema';
import { PlaylistMetaWhereInputObjectSchema } from './objects/PlaylistMetaWhereInput.schema';

export const PlaylistMetaUpdateManySchema = z.object({
  data: PlaylistMetaUpdateManyMutationInputObjectSchema,
  where: PlaylistMetaWhereInputObjectSchema.optional(),
});
