import { z } from 'zod';
import { PlaylistOnFollowerWhereUniqueInputObjectSchema } from './objects/PlaylistOnFollowerWhereUniqueInput.schema';

export const PlaylistOnFollowerFindUniqueSchema = z.object({
  where: PlaylistOnFollowerWhereUniqueInputObjectSchema,
});
