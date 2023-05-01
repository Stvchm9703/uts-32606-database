import { z } from 'zod';
import { PlaylistMetaCreateManyInputObjectSchema } from './objects/PlaylistMetaCreateManyInput.schema';

export const PlaylistMetaCreateManySchema = z.object({
  data: z.union([
    PlaylistMetaCreateManyInputObjectSchema,
    z.array(PlaylistMetaCreateManyInputObjectSchema),
  ]),
});
