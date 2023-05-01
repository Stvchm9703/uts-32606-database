import { z } from 'zod';
import { PlaylistMetaWhereInputObjectSchema } from './objects/PlaylistMetaWhereInput.schema';

export const PlaylistMetaDeleteManySchema = z.object({
  where: PlaylistMetaWhereInputObjectSchema.optional(),
});
