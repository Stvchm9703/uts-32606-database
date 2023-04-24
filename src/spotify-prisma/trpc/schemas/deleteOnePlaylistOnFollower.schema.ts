import { z } from 'zod';
import { PlaylistOnFollowerWhereUniqueInputObjectSchema } from './objects/PlaylistOnFollowerWhereUniqueInput.schema';

export const PlaylistOnFollowerDeleteOneSchema = z.object({
  where: PlaylistOnFollowerWhereUniqueInputObjectSchema,
});
