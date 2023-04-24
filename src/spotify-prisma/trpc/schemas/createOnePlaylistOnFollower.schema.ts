import { z } from 'zod';
import { PlaylistOnFollowerCreateInputObjectSchema } from './objects/PlaylistOnFollowerCreateInput.schema';
import { PlaylistOnFollowerUncheckedCreateInputObjectSchema } from './objects/PlaylistOnFollowerUncheckedCreateInput.schema';

export const PlaylistOnFollowerCreateOneSchema = z.object({
  data: z.union([
    PlaylistOnFollowerCreateInputObjectSchema,
    PlaylistOnFollowerUncheckedCreateInputObjectSchema,
  ]),
});
