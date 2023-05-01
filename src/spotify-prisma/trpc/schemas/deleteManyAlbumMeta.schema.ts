import { z } from 'zod';
import { AlbumMetaWhereInputObjectSchema } from './objects/AlbumMetaWhereInput.schema';

export const AlbumMetaDeleteManySchema = z.object({
  where: AlbumMetaWhereInputObjectSchema.optional(),
});
