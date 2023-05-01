import { z } from 'zod';
import { PlaylistMetaCreateInputObjectSchema } from './objects/PlaylistMetaCreateInput.schema';
import { PlaylistMetaUncheckedCreateInputObjectSchema } from './objects/PlaylistMetaUncheckedCreateInput.schema';

export const PlaylistMetaCreateOneSchema = z.object({
  data: z.union([
    PlaylistMetaCreateInputObjectSchema,
    PlaylistMetaUncheckedCreateInputObjectSchema,
  ]),
});
