import { z } from 'zod';
import { PlaylistUpdateInputObjectSchema } from './objects/PlaylistUpdateInput.schema';
import { PlaylistUncheckedUpdateInputObjectSchema } from './objects/PlaylistUncheckedUpdateInput.schema';
import { PlaylistWhereUniqueInputObjectSchema } from './objects/PlaylistWhereUniqueInput.schema';

export const PlaylistUpdateOneSchema = z.object({
  data: z.union([
    PlaylistUpdateInputObjectSchema,
    PlaylistUncheckedUpdateInputObjectSchema,
  ]),
  where: PlaylistWhereUniqueInputObjectSchema,
});
