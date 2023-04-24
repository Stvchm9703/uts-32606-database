import { z } from 'zod';
import { PlaylistWhereInputObjectSchema } from './objects/PlaylistWhereInput.schema';

export const PlaylistDeleteManySchema = z.object({
  where: PlaylistWhereInputObjectSchema.optional(),
});
