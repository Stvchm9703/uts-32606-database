import { z } from 'zod';
import { AlbumMetaWhereUniqueInputObjectSchema } from './objects/AlbumMetaWhereUniqueInput.schema';

export const AlbumMetaFindUniqueSchema = z.object({
  where: AlbumMetaWhereUniqueInputObjectSchema,
});
