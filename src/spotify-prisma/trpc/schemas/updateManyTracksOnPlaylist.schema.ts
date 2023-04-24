import { z } from 'zod';
import { TracksOnPlaylistUpdateManyMutationInputObjectSchema } from './objects/TracksOnPlaylistUpdateManyMutationInput.schema';
import { TracksOnPlaylistWhereInputObjectSchema } from './objects/TracksOnPlaylistWhereInput.schema';

export const TracksOnPlaylistUpdateManySchema = z.object({
  data: TracksOnPlaylistUpdateManyMutationInputObjectSchema,
  where: TracksOnPlaylistWhereInputObjectSchema.optional(),
});
