import { z } from 'zod';
import { PlaylistOnFollowerUpdateInputObjectSchema } from './objects/PlaylistOnFollowerUpdateInput.schema';
import { PlaylistOnFollowerUncheckedUpdateInputObjectSchema } from './objects/PlaylistOnFollowerUncheckedUpdateInput.schema';
import { PlaylistOnFollowerWhereUniqueInputObjectSchema } from './objects/PlaylistOnFollowerWhereUniqueInput.schema';

export const PlaylistOnFollowerUpdateOneSchema = z.object({
  data: z.union([
    PlaylistOnFollowerUpdateInputObjectSchema,
    PlaylistOnFollowerUncheckedUpdateInputObjectSchema,
  ]),
  where: PlaylistOnFollowerWhereUniqueInputObjectSchema,
});
