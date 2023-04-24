import { z } from 'zod';
import { AlbumCreateInputObjectSchema } from './objects/AlbumCreateInput.schema';
import { AlbumUncheckedCreateInputObjectSchema } from './objects/AlbumUncheckedCreateInput.schema';

export const AlbumCreateOneSchema = z.object({
  data: z.union([
    AlbumCreateInputObjectSchema,
    AlbumUncheckedCreateInputObjectSchema,
  ]),
});
