import { z } from 'zod';
import { TracksOnPlaylistWhereUniqueInputObjectSchema } from './objects/TracksOnPlaylistWhereUniqueInput.schema';

export const TracksOnPlaylistDeleteOneSchema = z.object({
  where: TracksOnPlaylistWhereUniqueInputObjectSchema,
});
