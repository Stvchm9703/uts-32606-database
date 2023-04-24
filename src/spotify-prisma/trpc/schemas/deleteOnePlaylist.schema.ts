import { z } from 'zod';
import { PlaylistWhereUniqueInputObjectSchema } from './objects/PlaylistWhereUniqueInput.schema';

export const PlaylistDeleteOneSchema = z.object({
  where: PlaylistWhereUniqueInputObjectSchema,
});
