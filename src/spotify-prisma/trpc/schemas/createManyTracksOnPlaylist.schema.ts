import { z } from 'zod';
import { TracksOnPlaylistCreateManyInputObjectSchema } from './objects/TracksOnPlaylistCreateManyInput.schema';

export const TracksOnPlaylistCreateManySchema = z.object({
  data: z.union([
    TracksOnPlaylistCreateManyInputObjectSchema,
    z.array(TracksOnPlaylistCreateManyInputObjectSchema),
  ]),
});
