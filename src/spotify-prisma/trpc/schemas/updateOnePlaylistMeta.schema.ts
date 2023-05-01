import { z } from 'zod';
import { PlaylistMetaUpdateInputObjectSchema } from './objects/PlaylistMetaUpdateInput.schema';
import { PlaylistMetaUncheckedUpdateInputObjectSchema } from './objects/PlaylistMetaUncheckedUpdateInput.schema';
import { PlaylistMetaWhereUniqueInputObjectSchema } from './objects/PlaylistMetaWhereUniqueInput.schema';

export const PlaylistMetaUpdateOneSchema = z.object({
  data: z.union([
    PlaylistMetaUpdateInputObjectSchema,
    PlaylistMetaUncheckedUpdateInputObjectSchema,
  ]),
  where: PlaylistMetaWhereUniqueInputObjectSchema,
});
