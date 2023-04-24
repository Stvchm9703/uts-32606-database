import { z } from 'zod';
import { TracksOnPlaylistWhereUniqueInputObjectSchema } from './objects/TracksOnPlaylistWhereUniqueInput.schema';

export const TracksOnPlaylistFindUniqueSchema = z.object({
  where: TracksOnPlaylistWhereUniqueInputObjectSchema,
});
