import { z } from 'zod';
import { PlaylistMetaWhereUniqueInputObjectSchema } from './objects/PlaylistMetaWhereUniqueInput.schema';
import { PlaylistMetaCreateInputObjectSchema } from './objects/PlaylistMetaCreateInput.schema';
import { PlaylistMetaUncheckedCreateInputObjectSchema } from './objects/PlaylistMetaUncheckedCreateInput.schema';
import { PlaylistMetaUpdateInputObjectSchema } from './objects/PlaylistMetaUpdateInput.schema';
import { PlaylistMetaUncheckedUpdateInputObjectSchema } from './objects/PlaylistMetaUncheckedUpdateInput.schema';

export const PlaylistMetaUpsertSchema = z.object({
  where: PlaylistMetaWhereUniqueInputObjectSchema,
  create: z.union([
    PlaylistMetaCreateInputObjectSchema,
    PlaylistMetaUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    PlaylistMetaUpdateInputObjectSchema,
    PlaylistMetaUncheckedUpdateInputObjectSchema,
  ]),
});
