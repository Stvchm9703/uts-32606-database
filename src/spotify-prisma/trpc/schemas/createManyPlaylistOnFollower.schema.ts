import { z } from 'zod';
import { PlaylistOnFollowerCreateManyInputObjectSchema } from './objects/PlaylistOnFollowerCreateManyInput.schema';

export const PlaylistOnFollowerCreateManySchema = z.object({
  data: z.union([
    PlaylistOnFollowerCreateManyInputObjectSchema,
    z.array(PlaylistOnFollowerCreateManyInputObjectSchema),
  ]),
});
