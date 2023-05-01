import { z } from 'zod';
import { AlbumMetaWhereUniqueInputObjectSchema } from './objects/AlbumMetaWhereUniqueInput.schema';
import { AlbumMetaCreateInputObjectSchema } from './objects/AlbumMetaCreateInput.schema';
import { AlbumMetaUncheckedCreateInputObjectSchema } from './objects/AlbumMetaUncheckedCreateInput.schema';
import { AlbumMetaUpdateInputObjectSchema } from './objects/AlbumMetaUpdateInput.schema';
import { AlbumMetaUncheckedUpdateInputObjectSchema } from './objects/AlbumMetaUncheckedUpdateInput.schema';

export const AlbumMetaUpsertSchema = z.object({
  where: AlbumMetaWhereUniqueInputObjectSchema,
  create: z.union([
    AlbumMetaCreateInputObjectSchema,
    AlbumMetaUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    AlbumMetaUpdateInputObjectSchema,
    AlbumMetaUncheckedUpdateInputObjectSchema,
  ]),
});
