import { z } from 'zod';
import { PlaylistMetaWhereUniqueInputObjectSchema } from './objects/PlaylistMetaWhereUniqueInput.schema';

export const PlaylistMetaFindUniqueSchema = z.object({
  where: PlaylistMetaWhereUniqueInputObjectSchema,
});
