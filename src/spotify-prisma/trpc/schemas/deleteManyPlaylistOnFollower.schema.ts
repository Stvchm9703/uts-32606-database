import { z } from 'zod';
import { PlaylistOnFollowerWhereInputObjectSchema } from './objects/PlaylistOnFollowerWhereInput.schema';

export const PlaylistOnFollowerDeleteManySchema = z.object({
  where: PlaylistOnFollowerWhereInputObjectSchema.optional(),
});
