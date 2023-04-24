import { z } from 'zod';
import { PlaylistOnFollowerWhereUniqueInputObjectSchema } from './objects/PlaylistOnFollowerWhereUniqueInput.schema';
import { PlaylistOnFollowerCreateInputObjectSchema } from './objects/PlaylistOnFollowerCreateInput.schema';
import { PlaylistOnFollowerUncheckedCreateInputObjectSchema } from './objects/PlaylistOnFollowerUncheckedCreateInput.schema';
import { PlaylistOnFollowerUpdateInputObjectSchema } from './objects/PlaylistOnFollowerUpdateInput.schema';
import { PlaylistOnFollowerUncheckedUpdateInputObjectSchema } from './objects/PlaylistOnFollowerUncheckedUpdateInput.schema';

export const PlaylistOnFollowerUpsertSchema = z.object({
  where: PlaylistOnFollowerWhereUniqueInputObjectSchema,
  create: z.union([
    PlaylistOnFollowerCreateInputObjectSchema,
    PlaylistOnFollowerUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    PlaylistOnFollowerUpdateInputObjectSchema,
    PlaylistOnFollowerUncheckedUpdateInputObjectSchema,
  ]),
});
