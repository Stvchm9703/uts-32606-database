import { z } from 'zod';
import { TracksOnPlaylistWhereUniqueInputObjectSchema } from './objects/TracksOnPlaylistWhereUniqueInput.schema';
import { TracksOnPlaylistCreateInputObjectSchema } from './objects/TracksOnPlaylistCreateInput.schema';
import { TracksOnPlaylistUncheckedCreateInputObjectSchema } from './objects/TracksOnPlaylistUncheckedCreateInput.schema';
import { TracksOnPlaylistUpdateInputObjectSchema } from './objects/TracksOnPlaylistUpdateInput.schema';
import { TracksOnPlaylistUncheckedUpdateInputObjectSchema } from './objects/TracksOnPlaylistUncheckedUpdateInput.schema';

export const TracksOnPlaylistUpsertSchema = z.object({
  where: TracksOnPlaylistWhereUniqueInputObjectSchema,
  create: z.union([
    TracksOnPlaylistCreateInputObjectSchema,
    TracksOnPlaylistUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    TracksOnPlaylistUpdateInputObjectSchema,
    TracksOnPlaylistUncheckedUpdateInputObjectSchema,
  ]),
});
