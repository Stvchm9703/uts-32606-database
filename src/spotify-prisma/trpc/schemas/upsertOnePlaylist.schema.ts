import { z } from 'zod';
import { PlaylistWhereUniqueInputObjectSchema } from './objects/PlaylistWhereUniqueInput.schema';
import { PlaylistCreateInputObjectSchema } from './objects/PlaylistCreateInput.schema';
import { PlaylistUncheckedCreateInputObjectSchema } from './objects/PlaylistUncheckedCreateInput.schema';
import { PlaylistUpdateInputObjectSchema } from './objects/PlaylistUpdateInput.schema';
import { PlaylistUncheckedUpdateInputObjectSchema } from './objects/PlaylistUncheckedUpdateInput.schema';

export const PlaylistUpsertSchema = z.object({
  where: PlaylistWhereUniqueInputObjectSchema,
  create: z.union([
    PlaylistCreateInputObjectSchema,
    PlaylistUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    PlaylistUpdateInputObjectSchema,
    PlaylistUncheckedUpdateInputObjectSchema,
  ]),
});
