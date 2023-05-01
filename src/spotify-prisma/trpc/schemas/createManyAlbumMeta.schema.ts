import { z } from 'zod';
import { AlbumMetaCreateManyInputObjectSchema } from './objects/AlbumMetaCreateManyInput.schema';

export const AlbumMetaCreateManySchema = z.object({
  data: z.union([
    AlbumMetaCreateManyInputObjectSchema,
    z.array(AlbumMetaCreateManyInputObjectSchema),
  ]),
});
