import { z } from 'zod';
import { PlaylistCreateInputObjectSchema } from './objects/PlaylistCreateInput.schema';
import { PlaylistUncheckedCreateInputObjectSchema } from './objects/PlaylistUncheckedCreateInput.schema';

export const PlaylistCreateOneSchema = z.object({
  data: z.union([
    PlaylistCreateInputObjectSchema,
    PlaylistUncheckedCreateInputObjectSchema,
  ]),
});
