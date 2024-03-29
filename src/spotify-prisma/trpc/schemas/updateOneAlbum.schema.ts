import { z } from 'zod';
import { AlbumUpdateInputObjectSchema } from './objects/AlbumUpdateInput.schema';
import { AlbumUncheckedUpdateInputObjectSchema } from './objects/AlbumUncheckedUpdateInput.schema';
import { AlbumWhereUniqueInputObjectSchema } from './objects/AlbumWhereUniqueInput.schema';

export const AlbumUpdateOneSchema = z.object({
  data: z.union([
    AlbumUpdateInputObjectSchema,
    AlbumUncheckedUpdateInputObjectSchema,
  ]),
  where: AlbumWhereUniqueInputObjectSchema,
});
