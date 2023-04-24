import { z } from 'zod';
import { PlaylistWhereUniqueInputObjectSchema } from './objects/PlaylistWhereUniqueInput.schema';

export const PlaylistFindUniqueSchema = z.object({
  where: PlaylistWhereUniqueInputObjectSchema,
});
