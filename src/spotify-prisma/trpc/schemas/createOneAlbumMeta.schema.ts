import { z } from 'zod';
import { AlbumMetaCreateInputObjectSchema } from './objects/AlbumMetaCreateInput.schema';
import { AlbumMetaUncheckedCreateInputObjectSchema } from './objects/AlbumMetaUncheckedCreateInput.schema';

export const AlbumMetaCreateOneSchema = z.object({
  data: z.union([
    AlbumMetaCreateInputObjectSchema,
    AlbumMetaUncheckedCreateInputObjectSchema,
  ]),
});
