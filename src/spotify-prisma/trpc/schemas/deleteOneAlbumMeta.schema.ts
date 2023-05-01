import { z } from 'zod';
import { AlbumMetaWhereUniqueInputObjectSchema } from './objects/AlbumMetaWhereUniqueInput.schema';

export const AlbumMetaDeleteOneSchema = z.object({
  where: AlbumMetaWhereUniqueInputObjectSchema,
});
