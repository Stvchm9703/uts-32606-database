import { z } from 'zod';
import { AlbumMetaUpdateInputObjectSchema } from './objects/AlbumMetaUpdateInput.schema';
import { AlbumMetaUncheckedUpdateInputObjectSchema } from './objects/AlbumMetaUncheckedUpdateInput.schema';
import { AlbumMetaWhereUniqueInputObjectSchema } from './objects/AlbumMetaWhereUniqueInput.schema';

export const AlbumMetaUpdateOneSchema = z.object({
  data: z.union([
    AlbumMetaUpdateInputObjectSchema,
    AlbumMetaUncheckedUpdateInputObjectSchema,
  ]),
  where: AlbumMetaWhereUniqueInputObjectSchema,
});
