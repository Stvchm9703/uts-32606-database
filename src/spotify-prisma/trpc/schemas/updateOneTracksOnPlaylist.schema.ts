import { z } from 'zod';
import { TracksOnPlaylistUpdateInputObjectSchema } from './objects/TracksOnPlaylistUpdateInput.schema';
import { TracksOnPlaylistUncheckedUpdateInputObjectSchema } from './objects/TracksOnPlaylistUncheckedUpdateInput.schema';
import { TracksOnPlaylistWhereUniqueInputObjectSchema } from './objects/TracksOnPlaylistWhereUniqueInput.schema';

export const TracksOnPlaylistUpdateOneSchema = z.object({
  data: z.union([
    TracksOnPlaylistUpdateInputObjectSchema,
    TracksOnPlaylistUncheckedUpdateInputObjectSchema,
  ]),
  where: TracksOnPlaylistWhereUniqueInputObjectSchema,
});
