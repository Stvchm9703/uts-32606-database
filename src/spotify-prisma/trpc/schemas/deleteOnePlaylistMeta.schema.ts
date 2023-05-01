import { z } from 'zod';
import { PlaylistMetaWhereUniqueInputObjectSchema } from './objects/PlaylistMetaWhereUniqueInput.schema';

export const PlaylistMetaDeleteOneSchema = z.object({
  where: PlaylistMetaWhereUniqueInputObjectSchema,
});
