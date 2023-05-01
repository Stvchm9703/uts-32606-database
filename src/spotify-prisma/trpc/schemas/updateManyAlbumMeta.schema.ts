import { z } from 'zod';
import { AlbumMetaUpdateManyMutationInputObjectSchema } from './objects/AlbumMetaUpdateManyMutationInput.schema';
import { AlbumMetaWhereInputObjectSchema } from './objects/AlbumMetaWhereInput.schema';

export const AlbumMetaUpdateManySchema = z.object({
  data: AlbumMetaUpdateManyMutationInputObjectSchema,
  where: AlbumMetaWhereInputObjectSchema.optional(),
});
