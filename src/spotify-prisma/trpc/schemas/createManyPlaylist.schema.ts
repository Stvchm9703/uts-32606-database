import { z } from 'zod';
import { PlaylistCreateManyInputObjectSchema } from './objects/PlaylistCreateManyInput.schema';

export const PlaylistCreateManySchema = z.object({
  data: z.union([
    PlaylistCreateManyInputObjectSchema,
    z.array(PlaylistCreateManyInputObjectSchema),
  ]),
});
