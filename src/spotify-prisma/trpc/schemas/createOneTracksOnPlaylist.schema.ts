import { z } from 'zod';
import { TracksOnPlaylistCreateInputObjectSchema } from './objects/TracksOnPlaylistCreateInput.schema';
import { TracksOnPlaylistUncheckedCreateInputObjectSchema } from './objects/TracksOnPlaylistUncheckedCreateInput.schema';

export const TracksOnPlaylistCreateOneSchema = z.object({
  data: z.union([
    TracksOnPlaylistCreateInputObjectSchema,
    TracksOnPlaylistUncheckedCreateInputObjectSchema,
  ]),
});
