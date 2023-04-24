import { z } from 'zod';
import { TracksOnPlaylistWhereInputObjectSchema } from './objects/TracksOnPlaylistWhereInput.schema';

export const TracksOnPlaylistDeleteManySchema = z.object({
  where: TracksOnPlaylistWhereInputObjectSchema.optional(),
});
